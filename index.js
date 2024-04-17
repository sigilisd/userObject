class UserProfileManager {
    constructor() {
        this.users = [];
    }
    // генерация уникального id для пользователя
    generateId() {
        return this.users.length + 1;
    }

    // метод для добавления нового пользователя
    addUser(userinfo) {
        const id = this.generateId();
        const newUser = { id, ...userinfo };
        this.users.push(newUser);
    }

    // метод для удаления пользователя по id
    removeUser(userid) {
        this.users = this.users.filter(user => user.id !== userid);
    }

    // метод для обновления информации о пользователе
    updateUser(userid, newinfo) {
        this.users = this.users.map(user => {
            if (user.id === userid) {
                return { ...user, ...newinfo };
            }
            return user;
        });
    }

    // метод для поиска пользователя по имени
    findUserByName(name) {
        return this.users.filter(user => user.name.includes(name));
    }

    // метод для возвращения всех пользователей
    getAllUsers() {
        return this.users;
    }
}

const profileManager = new UserProfileManager();

profileManager.addUser({ name: "Alice", email: "alice@example.com" });
profileManager.addUser({ name: "Bob", email: "bob@example.com" });

console.log(profileManager.getAllUsers()); // выводит информацию о Alice и Bob

profileManager.updateUser(1, { name: "Alicia" }); // обновляет имя Alice на Alicia
profileManager.removeUser(2); // удаляет Bob

console.log(profileManager.getAllUsers());

console.log(profileManager.findUserByName("Ali")); // находит Alicia
