const url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=2';

export interface CardsResponse {
    success: boolean;
    cards?: CardType[] | null;
    deck_id: string;
    remaining: number;
}
export interface CardType {
    image: string;
    images: string;
    value: string;
    suit: string;
    code: string;
}

const getRandomCard = async (): Promise<CardsResponse> => {
    const query = {
        method: 'GET',
    };
    const response = await fetch(url, query);
    const json = await response.json();
    return json;
};

export default getRandomCard;
