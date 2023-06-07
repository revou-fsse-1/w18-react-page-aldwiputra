type PhotoCardProps = {
  idx: number;
  title: string;
  imgUrl: string;
  isLiked: boolean;
  updatePlace: (idx: number, isLiked: boolean) => void;
};

function PhotoCard(props: PhotoCardProps) {
  return (
    <article className='group relative rounded-md overflow-hidden'>
      <div className='pt-10 pb-2 absolute w-full bottom-0 text-center bg-gradient-to-t from-0% from-black/0 to-transparent to-75% group-hover:from-black/100 transition-colors'>
        <h3 className='font-semibold text-lg translate-y-[120%] group-hover:translate-y-0 transition-transform'>
          {props.title}
        </h3>
      </div>
      <img className='block w-full aspect-[11/16] object-cover' src={props.imgUrl} alt='tada' />
      <button
        className='absolute right-0 top-0'
        onClick={() => {
          props.updatePlace(props.idx, !props.isLiked ? true : false);
        }}>
        {props.isLiked ? 'Unlike' : 'Like'}
      </button>
    </article>
  );
}

export default PhotoCard;
