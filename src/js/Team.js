export default class Team {
    constructor(name) {
        this.members = new Set();
        this.name = name;
    }
    
    add(member) {
        if (this.members.has(member)) {
            throw new Error('Такой персонаж уже существует!');
        }
        this.members.add(member);
    }

    addAll(...characters) {
        characters.forEach(member => {
            this.members.add(member);
        })
    }

    toArray() {
        return Array.from(this.members);
    }
}