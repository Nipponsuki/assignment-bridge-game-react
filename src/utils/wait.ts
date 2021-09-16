const wait = (amount?: number): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, amount));

export default wait;
