import "./styles.css";

export default function List({ food }) {
  return (
    <table>
      <tbody>
        <tr key={food.id}>
          <td dangerouslySetInnerHTML={{ __html: food.name }}></td>

          <td dangerouslySetInnerHTML={{ __html: food.description }}></td>
        </tr>
      </tbody>
    </table>
  );
}
