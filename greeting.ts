com.codebrickie.gwtjee.domain

class Greeting {
    private greetingText: string;

    constructor() {
        this.greetingText = null;
    }

    constructor(greetingText: string) {
        this.greetingText = greetingText;
    }

    setGreetingText(greetingText: string) {
        this.greetingText = greetingText;
    }

    getGreetingText(): string {
        return this.greetingText;
    }
}