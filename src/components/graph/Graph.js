import React from 'react';

import Node from './Node';
import Link from './Link';

import FORCE from '../../force';

//import logos for skills sectoin
import angular from './../../images/skills/angular.png';
import c from './../../images/skills/c.png';
import csharp from './../../images/skills/csharp.png';
import java from './../../images/skills/java.png';
import js from './../../images/skills/js.png';
import mysql from './../../images/skills/mysql.png';
import netcore from './../../images/skills/netcore.png';
import react from './../../images/skills/react.png';

class Graph extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            nodes: [
                {
                    name: 'Angular',
                    id: 0,
                    logo: angular
                },
                {
                    name: 'C',
                    id: 1,
                    logo: c
                },
                {
                    name: 'C#',
                    id: 2,
                    logo: csharp
                },
                {
                    name: 'Java',
                    id: 3,
                    logo: java
                },
                {
                    name: 'JavaScript',
                    id: 4,
                    logo: js
                },
                {
                    name: 'MySQL',
                    id: 5,
                    logo: mysql
                },
                {
                    name: '.NET Core',
                    id: 6,
                    logo: netcore
                },
                {
                    name: 'React',
                    id: 7,
                    logo: react
                }
            ],
            links: [
                {
                    source: 3,
                    target: 0,
                    id: 0
                },
                {
                    source: 3,
                    target: 1,
                    id: 1
                },
                {
                    source: 3,
                    target: 2,
                    id: 2
                },
                {
                    source: 3,
                    target: 4,
                    id: 3
                },
                {
                    source: 3,
                    target: 5,
                    id: 1
                },
                {
                    source: 3,
                    target: 6,
                    id: 4
                },
                {
                    source: 3,
                    target: 7,
                    id: 5
                },
            ]
        }
    }

    componentDidMount() {
        const data = this.state;
        FORCE.initForce(data.nodes, data.links)
        FORCE.tick(this)
        FORCE.drag()
    }

    render(){
        var links = this.state.links.map((link) => {
            return ( 
                <Link key = {link.id} data = {link}/>
            );
        });

        var nodes = this.state.nodes.map((node) => {
            return (
                <Node data = {node} name = {node.name} key = {node.id} />
            );
        });

        return (
            <div className="graph__container">
                <svg className = "graph" 
                    width = {FORCE.width}
                    height = {FORCE.height} >
                    <g> {links} </g> 
                    <g> {nodes} </g>
                </svg> 
            </div>
        );        
    }
}

export default Graph;