import { Pool, Token, Operation } from '../interfaces/interface';

export const getAvailableToken = (pools: Pool[]): Token[] => {}

export const getCounterPartTokens = (pools: Pool[], fromToken: Token): Token[] => {}

export const findPoolByTokens = (pools: Pool[], fromToken: Token, toToken: Token): Pool | undefined => {}

export const isOperationPending = (operation: Operation): boolean => operation.status === 'PendingSignature' || operation.status === 'Mining'

export const isOperationSuccess = (operation: Operation): boolean => operation.status === 'Success'

export const isOperationFailed = (operation: Operation): boolean => operation.status === 'Failed'

export const getFailureReason = (operation: Operation): string | undefined => {}

export const getSuccessResult = (operation: Operation): any => {}


