import "../CSS/CharacterRatings.css";

export function TopCharactersChart({ data }) {
  const sortedVotes = data
    .sort((v1, v2) => (v1.votes < v2.votes ? 1 : v1.votes > v2.votes ? -1 : 0))
    .slice(0, 5);
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
          {sortedVotes.map((item, itemIndex) => {
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
