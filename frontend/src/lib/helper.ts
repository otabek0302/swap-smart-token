import { Pool, Token, Operation } from '../interfaces/interface';

export const getAvailableToken = (pools: Pool[]): Token[] => {
    const tokens = new Map<string, Token>();

    pools.forEach(pool => {
        if (!tokens.has(pool.token0.address)) {
            tokens.set(pool.token0.address, pool.token0);
        }
        if (!tokens.has(pool.token1.address)) {
            tokens.set(pool.token1.address, pool.token1);
        }
    });

    return Array.from(tokens.values());
};

export const getCounterPartTokens = (pools: Pool[], fromToken: Token): Token[] => {
    const counterpartTokens = new Map<string, Token>();

    pools.forEach(pool => {
        if (pool.token0.address === fromToken.address && !counterpartTokens.has(pool.token1.address)) {
            counterpartTokens.set(pool.token1.address, pool.token1);
        }
        if (pool.token1.address === fromToken.address && !counterpartTokens.has(pool.token0.address)) {
            counterpartTokens.set(pool.token0.address, pool.token0);
        }
    });

    return Array.from(counterpartTokens.values());
};

export const findPoolByTokens = (pools: Pool[], fromToken: Token, toToken: Token): Pool | undefined => {
    return pools.find(pool =>
        (pool.token0.address === fromToken.address && pool.token1.address === toToken.address) ||
        (pool.token0.address === toToken.address && pool.token1.address === fromToken.address)
    );
};

export const isOperationPending = (operation: Operation): boolean =>
    operation.status === 'PendingSignature' || operation.status === 'Mining';

export const isOperationSuccess = (operation: Operation): boolean =>
    operation.status === 'Success';

export const isOperationFailed = (operation: Operation): boolean =>
    operation.status === 'Failed';

export const getFailureReason = (operation: Operation): string | undefined =>
    operation.error;

export const getSuccessResult = (operation: Operation): unknown =>
    operation.result;


