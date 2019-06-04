import React from 'react'
import { MDBContainer, Card, CardBody } from 'mdbreact'
import { Spinner } from 'reactstrap'

class LoadingContainer extends React.Component {
    render() {

        
        return (

            
            <MDBContainer>
                <div className="page-wrap d-flex flex-row align-items-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="text-center">
                                <span className="display-1 d-block">Cargando</span>
                                <Spinner style={{ width: '4rem', height: '4rem', marginTop: '10' }} type="grow" />
                            </div>
                        </div>
                    </div>
                </div>
            </MDBContainer>
        )
    }
}
export default LoadingContainer