class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def speak(self):
        return "Some generic sound"
    def info(self):
        return f"{self.name} is {self.age} years old and has {self.color} color"

    def __str__(self):
        return f"Animal: {self.name}, Age: {self.age}, Color: {self.color}"


class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed

    def speak(self):
        return "Woof!"

    def fetch(self):
        return f"{self.name} is fetching the ball!"

    def __str__(self):
        return f"Dog: {self.name}, Breed: {self.breed}, Age: {self.age}"


class Cat(Animal):
    def __init__(self, name, age, color, indoor):
        super().__init__(name, age, color)
        self.indoor = indoor

    def speak(self):
        return "Meow!"

    def scratch(self):
        return f"{self.name} is scratching the sofa!"

    def __str__(self):
        return f"Cat: {self.name}, Indoor: {self.indoor}, Age: {self.age}"
