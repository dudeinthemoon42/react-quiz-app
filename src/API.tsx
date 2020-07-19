import { shuffleArray } from './utils';

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
};

// we want to use both the correct and incorrect answers in the same array later, so 'merge' or union the original question type with a new custom type (using &)
export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
};

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint=`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    //console.log(data);
    return data.results.map((question: Question) => (
        {
            ...question, // three dots mean 'spread', so this spreads all of properties of question into this data.results object
            // i.e. if question = { category: 'whofuckingcares', difficulty: 'ez' }
            // then {...question} = { category: 'whofuckingcares', difficulty: 'ez' }
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }
    ))
}