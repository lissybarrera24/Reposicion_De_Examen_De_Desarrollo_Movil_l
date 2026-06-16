import React, {
  createContext,
  useState,
  ReactNode
} from 'react';

interface BancoContextType {
  saldo: number;
  transacciones: string[];
  depositarSaldo: () => void;
  transferirSaldo: (
    monto: number,
    destinatario: string
  ) => boolean;
}

export const BancoContext =
  createContext<BancoContextType>(
    {} as BancoContextType
  );

interface Props {
  children: ReactNode;
}

export const BancoProvider = ({
  children
}: Props) => {

  const [saldo, setSaldo] =
    useState<number>(10000);

  const [transacciones, setTransacciones] =
    useState<string[]>([]);

  const depositarSaldo = () => {

    setSaldo(prev => prev + 500);

    setTransacciones(prev => [
      ...prev,
      'Depósito de L.500'
    ]);
  };

  const transferirSaldo = (
    monto: number,
    destinatario: string
  ) => {

    if (monto <= saldo) {

      setSaldo(prev => prev - monto);

      setTransacciones(prev => [
        ...prev,
        `Transferencia de L.${monto} a ${destinatario}`
      ]);

      return true;
    }

    return false;
  };

  return (
    <BancoContext.Provider
      value={{
        saldo,
        transacciones,
        depositarSaldo,
        transferirSaldo
      }}
    >
      {children}
    </BancoContext.Provider>
  );
};
