import React from "react";
import { storiesOf } from "@storybook/react";
import { DragDropCanvas, DragDropElement } from "@radoslaw-medryk/react-dragdrop";

const canvasStyle = {
    background: "#efe",
    width: 600,
    height: 400
};

const DemoContent = ({color}) => (
    <div style={{background: color, height: 100, width: 100}}/>
);

storiesOf("DragDropElement", module)
    .add("uncontrolled, without `defaultPosition`", () => (
        <DragDropCanvas style={canvasStyle}>
            <DragDropElement>
                <DemoContent color="#99f"/>
            </DragDropElement>
        </DragDropCanvas>
    ))
    .add("uncontrolled, with `defaultPosition`", () => (
        <DragDropCanvas style={canvasStyle}>
            <DragDropElement defaultPosition={{x: 200, y: 100}}>
                <DemoContent color="#99f"/>
            </DragDropElement>
        </DragDropCanvas>
    ))
    .add("with details", () => (
        <DragDropCanvas style={canvasStyle}>
            <DragDropElement>
                {details => (<DemoContent color={details.isDragged? "#f99" : "#99f"}/>)}
            </DragDropElement>
        </DragDropCanvas>
    ))
    .add("multiple uncontrolled", () => (
        <DragDropCanvas style={{background: "#efe", width: 600, height: 400}}>
            <DragDropElement defaultPosition={{x: 20, y: 20}}>
                <DemoContent color="#99f"/>
            </DragDropElement>
            <DragDropElement defaultPosition={{x: 30, y: 30}}>
                <DemoContent color="#aaf"/>
            </DragDropElement>
            <DragDropElement defaultPosition={{x: 40, y: 40}}>
                <DemoContent color="#ccf"/>
            </DragDropElement>
        </DragDropCanvas>
    ))
    .add("controlled", () => {
        class ControlingParent extends React.Component {
            constructor(props) {
                super(props);

                this.state = {
                    position: {x: 0, y: 0}
                };
            }
        
            render() {
                const {position} = this.state;

                return (
                    <DragDropCanvas style={canvasStyle}>
                        <DragDropElement position={position} onDropped={this.onDropped}>
                            <DemoContent color="#99f"/>
                        </DragDropElement>
                    </DragDropCanvas>
                );
            }

            onDropped = (position) => {
                this.setState({
                    position: position,
                });
            }
        }

        return <ControlingParent />
    });