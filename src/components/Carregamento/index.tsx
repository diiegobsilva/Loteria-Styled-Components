import { useEffect, useState } from "react";
import styled from "styled-components";

export function Carregando({ dataApuracao }: any) {
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    if (dataApuracao) {
      setCarregando(false);
    }
  }, [dataApuracao]);

  return (
    <>
      {carregando && (
        <Div>
          <Text>Carregando...</Text>
        </Div>
      )}
    </>
  );
}

const Div = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -50px 0 0 -50px;
`;

const Text = styled.div`
  font-family: Roboto; 
  font-size: x-large;
  font-weight: bold;
`;

