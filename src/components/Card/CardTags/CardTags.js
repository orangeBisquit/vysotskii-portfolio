import "./CardTags.scss";

export const CardTags = ({ importantTech, otherTech, id }) => {
  const combinedTech = [...importantTech, ...otherTech];
  return (
    <ul className="CardTags">
      {combinedTech.map((tag, index) => {
        return (
          <li className="CardTags__item" key={id + index.toString()}>
            {`#${tag}`}
          </li>
        );
      })}
    </ul>
  );
};

export default CardTags;
