const url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';

export interface CardResponse {
    success: boolean;
    cards?: Card[] | null;
    deck_id: string;
    remaining: number;
}
export interface Card {
    image: string;
    value: string;
    suit: string;
    code: string;
}

const getRandomCard = async (): Promise<CardResponse> => {
    const query = {
        method: 'GET',
    };
    const response = await fetch(url, query);
    const json = await response.json();
    return json.cards[0];
};

export default getRandomCard;
