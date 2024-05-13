import './toDoTest.css'

const toDoTest = () => {
    return (
        <>
        <div className='container'>
            <div className='uno'>
                <div className="hexagonBack">
                    <div className='hexagon'>
                    </div>
                </div>
                <div className="hexagonBack">
                    <div className='hexagon'>
                    </div>
                </div>
                <div className="hexagonBack">
                    <div className='hexagon'>
                    </div>
                </div>
            </div>
            <div className='dos'>
                <div className="hexagonBack">
                    <div className='hexagon'>
                    </div>
                </div>
                <div className="hexagonBack">
                    <div className='hexagon'>
                    </div>
                </div>
            </div>
            <div className='dos' id="dos-dos">
                <div className="hexagonBack">
                    <div className='hexagon'>
                    </div>
                </div>
                <div className="hexagonBack">
                    <div className='hexagon'>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default toDoTest;