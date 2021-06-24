import axios from "axios";
import { useEffect, useState } from "react";
import { DashboardContainer, DashboardContent, Total, List, Item, Date, Description, Value } from "./style";
import dayjs from "dayjs";
import SumEntries from "../../utils/SumEntries";
import { useHistory } from "react-router-dom";


const Dashboard = ({ token }) => {
  const [entries, setEntries] = useState([]);
  const [total, setTotal] = useState({});
  const history = useHistory();

  useEffect(() => {
    const promise = axios.get("http://localhost:4000/finances", { headers: { Authorization: `Bearer ${token}` } });
    promise.then(({ data }) => {
      setEntries(data);
      setTotal(SumEntries(data));
    });
    promise.catch(e => {
      console.error(e.response);
      if (e.response.status === 401) {
        window.alert("Sessão expirada.\nPor favor, faça login novamente");
        history.push("/signin");
      } else {
        window.alert("Erro interno do servidor. Sua página será recarregada");
        window.location.reload();
      }
    });
  }, []); // eslint-disable-line

  return (
    <DashboardContainer>
      {entries.length ?
        <DashboardContent>
          <List>
            {entries.map(entry => (
              <Item key={entry.id}>
                <Date>{dayjs(entry.date).format("DD/MM")}</Date>
                <Description>{entry.description}</Description>
                <Value type={entry.type}>{"R$ " + String((entry.value / 100).toFixed(2)).replace(".", ",")}</Value>
              </Item>
            )).reverse()}
          </List>
          <Total>Saldo {total.type === "income" ? <Value type="income">{total.value}</Value> : <Value type="outgo">{total.value}</Value>}</Total>
        </DashboardContent>
        :
        <p>Não há registros de<br />entrada ou saída</p>
      }
    </DashboardContainer>
  );
}

export default Dashboard;