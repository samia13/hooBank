import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className='flex flex-col px-10 py-12 gap-3 rounded-[20px] max-w-[370px] feedback-card'>
    <img
      src={quotes}
      alt='double_quotes'
      className='w-[42.6px] h-[27.6px] object-contain'
    />
    <p className='font-poppins font-normal text-[18px] leading-[32.4px] text-white'>
      {content}
    </p>

    <div className='flex flex-row gap-2 items-center'>
      <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full' />
      <div className='flex flex-col'>
        <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>
          {name}
        </h4>
        <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
