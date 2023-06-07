type PhotoCardProps = {
  idx: number;
  title: string;
  imgUrl: string;
  isLiked: boolean;
  updatePlace: (idx: number, isLiked: boolean) => void;
};

function PhotoCard(props: PhotoCardProps) {
  return (
    <article className='group grid grid-cols-1 grid-rows-1 rounded-md overflow-hidden hover:scale-110 hover:z-10 transition-transform duration-250 origin-top'>
      <div className='z-10 pt-10 pb-4 col-start-1 col-end-2 row-start-1 row-end-2 w-full self-end text-center h-fit bg-gradient-to-t from-0% from-black to-90% to-transparent'>
        <h3 className='font-semibold text-lg duration-200 delay-250 ease-in'>{props.title}</h3>
      </div>
      <img
        className='block w-full col-start-1 col-end-2 row-start-1 row-end-2 aspect-[11/16] object-cover'
        src={props.imgUrl}
        alt='tada'
      />
      <button
        className={`col-start-1 col-end-2 row-start-1 row-end-2 w-fit h-fit justify-self-end px-4 py-1  font-normal rounded-lg  ${
          props.isLiked
            ? 'bg-blue-500 text-gray-200 ring-blue-500/25'
            : 'bg-gray-200 text-gray-800 ring-gray-200/25'
        } ring-2  -translate-x-4 translate-y-4`}
        onClick={() => {
          props.updatePlace(props.idx, !props.isLiked ? true : false);
        }}>
        {props.isLiked ? 'Liked' : 'Like'}
      </button>
    </article>
  );
}

export default PhotoCard;
