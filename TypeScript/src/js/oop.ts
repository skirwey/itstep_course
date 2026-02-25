class User {
    name: string;
    age: number;
    readonly gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    showInfo(): void{
        console.log(`My name is ${this.name}. I'm ${this.age} years old.`);
    }

    toSting(): string{
        return `${this.name}: ${this.age}`;
    }
}

let user: User = new User("Ivan Ivanov", 19, "male");   

user.showInfo();

console.log(user.toSting());