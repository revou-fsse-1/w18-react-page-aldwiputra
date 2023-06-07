type PhotoCardProps = {
  idx: number;
  title: string;
  imgUrl: string;
  isLiked: boolean;
  updatePlace: (idx: number, isLiked: boolean) => void;
};

function PhotoCard(props: PhotoCardProps) {
  return (
    <article>
      <h3>{props.title}</h3>
      <button
        onClick={() => {
          props.updatePlace(props.idx, !props.isLiked ? true : false);
        }}>
        {props.isLiked ? 'Unlike' : 'Like'}
      </button>
    </article>
  );
}

export default PhotoCard;
