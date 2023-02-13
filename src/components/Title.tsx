type Props = {
    title: string
}

const Title = ({ title }: Props) => {
  return (
    <div className='text-left'>
        <h2 className='text-3xl font-semibold'>{title}</h2>
        <div className='absolute mr-auto mt-[10px] w-[150px] h-[3px] bg-[#206BDC] rounded' />        
    </div>
  )
}

export default Title