import PropTypes from 'prop-types';

const Tags = ({tag}) => {
    
    return (
        <div className=' bg-[#F3F3F3] py-1 px-3 rounded-3xl'>
            <h1 className=' text-[#23BE0A]'>{tag}</h1>
        </div>
    );
};

Tags.propTypes={
    tag: PropTypes.string
}
export default Tags;