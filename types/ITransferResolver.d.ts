/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface ITransferResolverInterface extends Interface {
  functions: {
    resolve: TypedFunctionDescription<{
      encode([from, to, amount]: [string, string, BigNumberish]): string;
    }>;
  };

  events: {};
}

export class ITransferResolver extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ITransferResolver;
  attach(addressOrName: string): ITransferResolver;
  deployed(): Promise<ITransferResolver>;

  on(event: EventFilter | string, listener: Listener): ITransferResolver;
  once(event: EventFilter | string, listener: Listener): ITransferResolver;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): ITransferResolver;
  removeAllListeners(eventName: EventFilter | string): ITransferResolver;
  removeListener(eventName: any, listener: Listener): ITransferResolver;

  interface: ITransferResolverInterface;

  functions: {
    resolve(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  resolve(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {};

  estimate: {
    resolve(from: string, to: string, amount: BigNumberish): Promise<BigNumber>;
  };
}
