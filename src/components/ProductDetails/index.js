import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'
import './../../../node_modules/font-awesome/css/font-awesome.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

const Index = ({products}) => {
    // id = null;
    // product = null
    // componentDidMount() {
    //    id = this.props.match.params.id; 
    // }  
    let { id } = useParams();
    console.log(id); 
    console.log(products); 
    const product_details_by_id = products.find(product =>
        product.id === id);
    console.log(product_details_by_id);
    return (

        <div className="container">
            {
            }
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="row" id="gradient">
                        <div className="col-md-4">
                            <img src={`/images/${product_details_by_id.image}`} className="img-fluid" alt="product image" />
                        </div>
                        <div className="col-md-8" id="overview">
                            <div className="row">
                                <div className="col-xs-6 col-md-6">
                                    <ul className="pb-product-details-ul">
                                        <li><span className="fa fa-microchip">&nbsp;{`${product_details_by_id.cpu} CPU`}</span></li>
                                        <li><span className="fa fa-memory">&nbsp;{`${product_details_by_id.cpu} CPU`}</span></li>
                                        <li><span className="fa fa-bluetooth-b">&nbsp;Android OS, v6.0, up to 7.0</span></li>
                                        <li><span className="fa fa-microchip">&nbsp;{`${product_details_by_id.storage} Storage`} </span></li>
                                    </ul>
                                </div>
                                <div className="col-xs-3 col-md-3 text-xs-center" id="hits">
                                    <span className="fa fa-bar-chart">&nbsp;24%</span>
                                    <p>22,010,155 HITS</p>
                                </div>
                                <div className="col-xs-3 col-md-3 text-xs-center" id="fan">
                                    <a href="#"><span className="fa fa-heart">&nbsp;1904</span></a>
                                    <p>BECOME A FAN</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-3 col-md-3 pb-product-details-fa">
                                    <span className="fa fa-mobile fa-lg"></span>
                                    <h3><strong>5.5"</strong></h3>
                                    <p>1440x2560 pixels</p>
                                </div>
                                <div className="col-xs-3 col-md-3 pb-product-details-fa">
                                    <span className="fa fa-camera fa-lg"></span>
                                    <h3><strong>12 MP</strong></h3>
                                    <p>2160p</p>
                                </div>
                                <div className="col-xs-3 col-md-3 pb-product-details-fa">
                                    <span className="fa fa-microchip fa-lg"></span>
                                    <h3><strong>4GB RAM</strong></h3>
                                    <p>Exynos 8890</p>
                                </div>
                                <div className="col-xs-3 col-md-3 pb-product-details-fa">
                                    <span className="fa fa-battery-4 fa-lg"></span>
                                    <h3><strong>3600mAH</strong></h3>
                                    <p>Li-ion</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="tabs_div">
                            <ul>
                                <li>Display</li>
                                <li>Camera</li>
                                <li>Hardware</li>
                                <li>Battery</li>
                                <li>Phone features</li>
                            </ul>
                            <div>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td className="success">Physical size: </td>
                                            <td>{product_details_by_id.screen}</td>
                                        </tr>
                                        <tr>
                                            <td className="success">Resolution: </td>
                                            <td>1440x2560 pixels</td>
                                        </tr>
                                        <tr>
                                            <td className="success">Pixel density: </td>
                                            <td>534 dpi</td>
                                        </tr>
                                        <tr>
                                            <td className="success">Technology: </td>
                                            <td>Super AMOLED</td>
                                        </tr>
                                        <tr>
                                            <td className="success">Screen-to-body-ratio: </td>
                                            <td>76.09%</td>
                                        </tr>
                                        <tr>
                                            <td className="success">Features: </td>
                                            <td>Scratch-resistant glass (Corning Gorilla Glass 4), Light sensor, Proximity sensor</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td className="success">Camera: </td>
                                            <td>12 megapixels</td>
                                        </tr>
                                        <tr>
                                            <td className="success">Flash: </td>
                                            <td>LED</td>
                                        </tr>
                                        <tr>
                                            <td className="success">Aperture size: </td>
                                            <td>F1.7</td>
                                        </tr>
                                        <tr>
                                            <td className="success">Camera sensor size: </td>
                                            <td>1/2.5"</td>
                                        </tr>
                                        <tr>
                                            <td className="success">Pixel size: </td>
                                            <td>1.4 um</td>
                                        </tr>
                                        <tr>
                                            <td className="success">Hardware Features: </td>
                                            <td>Optical image stabilization, Autofocus (Phase detection)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td className="success">System chip: </td>
                                            <td>Qualcomm Snapdragon 820 MSM8996</td>
                                        </tr>
                                        <tr>
                                            <td className="success">Processor: </td>
                                            <td>{product_details_by_id.cpu}</td>
                                        </tr>
                                        <tr>
                                            <td className="success">GPU: </td>
                                            <td>Adreno 530</td>
                                        </tr>
                                        <tr>
                                            <td className="success">System memory: </td>
                                            <td>4GB memory</td>
                                        </tr>
                                        <tr>
                                            <td className="success">Built-in storage: </td>
                                            <td>{product_details_by_id.ram}</td>
                                        </tr>
                                        <tr>
                                            <td className="success">Storage Expansion: </td>
                                            <td>microSD, microSDHC, microSDXC up to 200 GB</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td className="success">Capacity: </td>
                                            <td>3600mah</td>
                                        </tr>
                                        <tr>
                                            <td className="success">Type: </td>
                                            <td>Not user replaceable, Li - Ion</td>
                                        </tr>
                                        <tr>
                                            <td className="success">Wireless charging: </td>
                                            <td>Optional</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td className="success">Sensors: </td>
                                            <td>Accelerometer, Gyroscope, Compass, Hall, Barometer</td>
                                        </tr>
                                        <tr>
                                            <td className="success">Notifications: </td>
                                            <td>Haptic feedback, Music ringtones (MP3), Polyphonic ringtones, Vibration, Flight mode, Silent mode, Speakerphone</td>
                                        </tr>
                                        <tr>
                                            <td className="success">Other: </td>
                                            <td>Voice dialing, Voice commands, Voice recording, TTY/TDD</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

function mapStateToProps(state) {
    console.log(state)
    return {
        products: state
    }
}
export default connect(mapStateToProps)(Index);
