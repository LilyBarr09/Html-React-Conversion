import "../CSS/CharacterRatings.css";

export function TopCharactersChart({ data }) {
  return (
    <div>
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
          {data
            .filter((item) => item.votes >= 90)
            .map((item, itemIndex) => {
              const adjustedIndex = itemIndex + 1;
              const isOdd = adjustedIndex % 2 === 1;
              return (
                <tr
                  key={item.name}
                  className={`item ${isOdd ? "dark" : "light"}`}
                >
                  <td key={item.name}>{item.name}</td>
                  <td key={item.skillSet}>{item.skillSet}</td>
                  <td key={item.votes}>{item.votes}</td>
                </tr>
              );
            })}
        </table>
      </section>
    </div>
  );
}
