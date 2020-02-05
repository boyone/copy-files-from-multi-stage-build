const world = 'World';

export default function hello(word: string = world): string {
  return `Hello, ${word}`;
}
