export type OperationStatus = 'PendingSignature' | 'Mining' | 'Success' | 'Failed';

export interface Operation {
    status: OperationStatus;
    result?: unknown;
    error?: string;
}

export interface Token {
    address: string;
    symbol: string;
    decimals: number;
}

export interface Pool {
    token0: Token;
    token1: Token;
    address: string;
    rate: bigint;
}

export interface Helper {
    getAvailableToken: (pools: Pool[]) => Token[];
    getCounterPartTokens: (pools: Pool[], fromToken: Token) => Token[];
    findPoolByTokens: (pools: Pool[], fromToken: Token, toToken: Token) => Pool | undefined;
    isOperationPending: (operation: Operation) => boolean;
    isOperationSuccess: (operation: Operation) => boolean;
    isOperationFailed: (operation: Operation) => boolean;
    getFailureReason: (operation: Operation) => string | undefined;
    getSuccessResult: (operation: Operation) => unknown;
}