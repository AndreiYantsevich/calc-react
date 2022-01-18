import './Display.css'

export const Display = ({value}) => {
    return (
        <div className='calc_screen'>
            <p>{value}</p>
        </div>
    )
}