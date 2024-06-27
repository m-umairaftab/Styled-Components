import { StyledCard } from "./styled/Card";

export default function Card({ item: { id, title, image, body } }) {
  return (
    <StyledCard layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{title}</h2>

        <p>{body}</p>
      </div>

      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </StyledCard>
  );
}
