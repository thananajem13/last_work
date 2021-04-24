import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'
import './../../../node_modules/font-awesome/css/font-awesome.min.css'; 
export class index extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-8 offset-md-2">
                        <div class="row" id="gradient">
                            <div class="col-md-4">
                                <img src="http://www.prepbootstrap.com/Content/images/shared/misc/s7e.png" class="img-fluid" />
                            </div>
                            <div class="col-md-8" id="overview">
                                <div class="row">
                                    <div class="col-xs-6 col-md-6">
                                        <ul class="pb-product-details-ul">
                                            <li><span class="fa fa-calendar">&nbsp;Released 2016, March</span></li>
                                            <li><span class="fa fa-phone">&nbsp;157g, 7.7mm thickness</span></li>
                                            <li><span class="fa fa-bluetooth-b">&nbsp;Android OS, v6.0, up to 7.0</span></li>
                                            <li><span class="fa fa-microchip">&nbsp;32/64/128GB Storage</span></li>
                                        </ul>
                                    </div>
                                    <div class="col-xs-3 col-md-3 text-xs-center" id="hits">
                                        <span class="fa fa-bar-chart">&nbsp;24%</span>
                                        <p>22,010,155 HITS</p>
                                    </div>
                                    <div class="col-xs-3 col-md-3 text-xs-center" id="fan">
                                        <a href="#"><span class="fa fa-heart">&nbsp;1904</span></a>
                                        <p>BECOME A FAN</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-3 col-md-3 pb-product-details-fa">
                                        <span class="fa fa-mobile fa-lg"></span>
                                        <h3><strong>5.5"</strong></h3>
                                        <p>1440x2560 pixels</p>
                                    </div>
                                    <div class="col-xs-3 col-md-3 pb-product-details-fa">
                                        <span class="fa fa-camera fa-lg"></span>
                                        <h3><strong>12 MP</strong></h3>
                                        <p>2160p</p>
                                    </div>
                                    <div class="col-xs-3 col-md-3 pb-product-details-fa">
                                        <span class="fa fa-microchip fa-lg"></span>
                                        <h3><strong>4GB RAM</strong></h3>
                                        <p>Exynos 8890</p>
                                    </div>
                                    <div class="col-xs-3 col-md-3 pb-product-details-fa">
                                        <span class="fa fa-battery-4 fa-lg"></span>
                                        <h3><strong>3600mAH</strong></h3>
                                        <p>Li-ion</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="tabs_div">
                                <ul>
                                    <li>Display</li>
                                    <li>Camera</li>
                                    <li>Hardware</li>
                                    <li>Battery</li>
                                    <li>Phone features</li>
                                </ul>
                                <div>
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td class="success">Physical size: </td>
                                                <td>5.5 inches</td>
                                            </tr>
                                            <tr>
                                                <td class="success">Resolution: </td>
                                                <td>1440x2560 pixels</td>
                                            </tr>
                                            <tr>
                                                <td class="success">Pixel density: </td>
                                                <td>534 dpi</td>
                                            </tr>
                                            <tr>
                                                <td class="success">Technology: </td>
                                                <td>Super AMOLED</td>
                                            </tr>
                                            <tr>
                                                <td class="success">Screen-to-body-ratio: </td>
                                                <td>76.09%</td>
                                            </tr>
                                            <tr>
                                                <td class="success">Features: </td>
                                                <td>Scratch-resistant glass (Corning Gorilla Glass 4), Light sensor, Proximity sensor</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div>
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td class="success">Camera: </td>
                                                <td>12 megapixels</td>
                                            </tr>
                                            <tr>
                                                <td class="success">Flash: </td>
                                                <td>LED</td>
                                            </tr>
                                            <tr>
                                                <td class="success">Aperture size: </td>
                                                <td>F1.7</td>
                                            </tr>
                                            <tr>
                                                <td class="success">Camera sensor size: </td>
                                                <td>1/2.5"</td>
                                            </tr>
                                            <tr>
                                                <td class="success">Pixel size: </td>
                                                <td>1.4 um</td>
                                            </tr>
                                            <tr>
                                                <td class="success">Hardware Features: </td>
                                                <td>Optical image stabilization, Autofocus (Phase detection)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div>
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td class="success">System chip: </td>
                                                <td>Qualcomm Snapdragon 820 MSM8996</td>
                                            </tr>
                                            <tr>
                                                <td class="success">Processor: </td>
                                                <td>Quad-core, 2200 MHz, Kryo, 64-bit</td>
                                            </tr>
                                            <tr>
                                                <td class="success">GPU: </td>
                                                <td>Adreno 530</td>
                                            </tr>
                                            <tr>
                                                <td class="success">System memory: </td>
                                                <td>4GB memory</td>
                                            </tr>
                                            <tr>
                                                <td class="success">Built-in storage: </td>
                                                <td>32GB</td>
                                            </tr>
                                            <tr>
                                                <td class="success">Storage Expansion: </td>
                                                <td>microSD, microSDHC, microSDXC up to 200 GB</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div>
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td class="success">Capacity: </td>
                                                <td>3600mah</td>
                                            </tr>
                                            <tr>
                                                <td class="success">Type: </td>
                                                <td>Not user replaceable, Li - Ion</td>
                                            </tr>
                                            <tr>
                                                <td class="success">Wireless charging: </td>
                                                <td>Optional</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div>
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td class="success">Sensors: </td>
                                                <td>Accelerometer, Gyroscope, Compass, Hall, Barometer</td>
                                            </tr>
                                            <tr>
                                                <td class="success">Notifications: </td>
                                                <td>Haptic feedback, Music ringtones (MP3), Polyphonic ringtones, Vibration, Flight mode, Silent mode, Speakerphone</td>
                                            </tr>
                                            <tr>
                                                <td class="success">Other: </td>
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
}
function mapStateToProps(state) {
    console.log(state)
    return {
        products: state
    }
}
export default connect(mapStateToProps)(index);
