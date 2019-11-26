import React from 'react'
import { Graph, Style, Marker } from '../../../../src'
import '../../../../src/addon/marker'

export default class Markers extends React.Component {
  private container: HTMLDivElement

  componentDidMount() {
    const graph = new Graph(this.container)
    const style: Style = { labelBackgroundColor: '#fff' }
    graph.batchUpdate(() => {
      Marker.getMakerNames().forEach((name, i) => {
        graph.addEdge({
          data: name,
          sourcePoint: { x: 24, y: 32 * (i + 1) },
          targetPoint: { x: 240, y: 32 * (i + 1) },
          style: { ...style, startArrow: name, endArrow: name },
        })
      })
    })
  }

  refContainer = (container: HTMLDivElement) => {
    this.container = container
  }

  render() {
    return (
      <div
        ref={this.refContainer}
        className="graph-container big"
      />
    )
  }
}
