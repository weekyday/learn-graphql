import { gql, useQuery } from '@apollo/client';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/adventure_time.css';

const GET_EMPLOYEE_NAMES = gql`
  query GetEmployeeNames($where: DepartmentsFilters) {
    departments(where: $where) {
      name
      companies {
        id
        employees {
          name
        }
      }
    }
  }
`;

export default function App() {
  const { loading, error, data } = useQuery(GET_EMPLOYEE_NAMES, {
    variables: {
      where: {
        id: {
          eq: '2',
        },
      },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error !!</p>;

  return <JSONPretty style={{ fontSize: 16 }} data={data} />;
}
