import getRandomCard, { CardsResponse } from 'api/cards';
import { useQuery, UseQueryResult } from 'react-query';

const useCards = (): UseQueryResult<CardsResponse, unknown> => {
    return useQuery('cards', () => getRandomCard());
};

export default useCards;
