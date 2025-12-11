from abc import ABC, abstractmethod
import random


class GameObserver(ABC):
    
    @abstractmethod
    def update(self, current_progress, attempts_left, status_message):
        pass

class WordProvider:
    
    _WORDS = [
    "sagaz", "nobre", "afeto", "sutil", "audaz",
    "fazer", "sanar", "inato", "moral", "desde",
    "cesta", "justo", "honra", "sonho", "razao",
    "amigo", "ideia", "poder", "anexo", "tempo"
    ]
    
    def get_secret_word(self):
        
        return random.choice(self._WORDS).upper()

class ProgressDisplay(GameObserver):
    
    def __init__(self):
        print("\n" + "=" * 40)
        print(" jogo de adivinhação de palavras iniciado ")
        print("=" * 40)
        
    def update(self, current_progress, attempts_left, status_message):
        
        print("\n" + "-" * 30)
        print(f"Progresso: {current_progress}")
        print(f"Tentativas restantes: {attempts_left}")
        
        if status_message:
            print(f"STATUS: {status_message}")
        print("-" * 30)

class GameController:
    
    def __init__(self, max_attempts=6):
        self._observers = []
        self._word_provider = WordProvider()
        self._secret_word = self._word_provider.get_secret_word()
        self._max_attempts = max_attempts
        self._attempts_left = max_attempts
        self._guessed_letters = set()
        self._is_game_over = False
        
        self._current_progress = ["_"] * len(self._secret_word)
        
        print(f"A palavra tem {len(self._secret_word)} letras.")

        self.notify_observers(f"tente adivinhar a palavra.")
        

    def attach(self, observer):

        if observer not in self._observers:
            self._observers.append(observer)

    def notify_observers(self, status_message=""):

        progress_str = " ".join(self._current_progress)

        for observer in self._observers:
            observer.update(progress_str, self._attempts_left, status_message)
            

    def is_game_over(self):

        return self._is_game_over

    def _check_game_status(self):
        
        if "_" not in self._current_progress:

            self._is_game_over = True
            self.notify_observers(f"VITÓRIA! a palavra era: {self._secret_word}")
            return True

        if self._attempts_left <= 0:
            self._is_game_over = True
            self.notify_observers(f"DERROTA! a palavra secreta era: {self._secret_word}")
            return True
            
        return False

    def receive_attempt(self, letter):
    
        if self._is_game_over:
            return
            
        letter = letter.upper()
        
        if len(letter) != 1 or not letter.isalpha():

            self.notify_observers("entrada inválida. digite apenas uma letra alfabética.")
            return
            
        if letter in self._guessed_letters:
            self.notify_observers(f"você já tentou a letra '{letter}'.")
            return

        self._guessed_letters.add(letter)
        
        if letter in self._secret_word:

            for i, char in enumerate(self._secret_word):
                if char == letter:
                    self._current_progress[i] = letter
            
            if not self._check_game_status():
                self.notify_observers(f"letra '{letter}' correta!")
        else:

            self._attempts_left -= 1

            if not self._check_game_status():
                self.notify_observers(f"letra '{letter}' incorreta.")


if __name__ == "__main__":
    
    game = GameController(max_attempts=6)
    
    display = ProgressDisplay()
    
    game.attach(display)
    
    while not game.is_game_over():

        try:
            user_input = input("\ndigite uma letra (ou '0' para encerrar): ").strip()
            
            if user_input.lower() == 0:
                break
                
            if len(user_input) == 1 and user_input.isalpha():
                game.receive_attempt(user_input)
            else:
                print("inválido. digite exatamente uma letra alfabética válida.")
                
        except EOFError:
        
            print("\nentrada interrompida. jogo encerrado.")
            break

        except Exception as e:
            print(f"ocorreu um erro: {e}")
            break