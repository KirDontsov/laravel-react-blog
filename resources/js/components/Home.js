import React from "react";

import styled from "styled-components";

const Card = styled.div`
    width: 100%;
`;

function Home() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card className="card">
                        <div className="card-header">Home</div>

                        <div className="card-body">
                            Home Page!
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Home;
