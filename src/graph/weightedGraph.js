const SimplePriorityQueue = function () {
    this.values = [];
}
SimplePriorityQueue.prototype.enqueue = function (value, priority) {
    this.values.push({ value, priority });
    this.values.sort((a, b) => a.priority - b.priority);
}
SimplePriorityQueue.prototype.dequeue = function () {
    return this.values.shift();
}


const WeightedGraph = function () {
    this.adjacencyList = new Map();
}
WeightedGraph.prototype.addVertex = function (vertex) {
    if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
    } else {
        console.log(`vertex ${vertex} already exists on graph`);
    }
}

WeightedGraph.prototype.addEdge = function (vertexA, vertexB, weight) {
    if (!this.adjacencyList.has(vertexA) || !this.adjacencyList.has(vertexB)) {
        console.log(`vertex does not exist on graph`);
        return;
    }
    this.adjacencyList.get(vertexA).push({ node: vertexB, weight });
    this.adjacencyList.get(vertexB).push({ node: vertexA, weight });
}

WeightedGraph.prototype.shortestPath = function (start, finish) {
    const nodes = new SimplePriorityQueue();
    const distances = new Map();
    const previous = new Map();
    let visited = new Map();
    let smallest;
    // initial state
    for (vertex of this.adjacencyList.keys()) {
        if (vertex === start) {
            distances.set(vertex, 0);
            nodes.enqueue(vertex, 0);
        } else {
            distances.set(vertex, Number.POSITIVE_INFINITY);
            nodes.enqueue(vertex, Number.POSITIVE_INFINITY);
        }
        previous.set(vertex, null);
    }
    let path = [finish];
    while (nodes.values.length) {
        smallest = nodes.dequeue().value;
        if (smallest === finish) {
            // done
            // console.log(distances);
            // console.log(previous);
            let node = finish;
            while (true) {
                let prev = previous.get(node);
                if (!prev) {
                    break;
                } else {
                    path.push(prev);
                    node = prev;
                }
            }
            break;
        }
        visited.set(smallest, true);
        if (smallest && distances.get(smallest) !== Number.POSITIVE_INFINITY) {
            neighbors = this.adjacencyList.get(smallest);
            for (let neighbor of neighbors) {
                if (visited.has(neighbor)) {
                    continue;
                }
                let candidate = distances.get(smallest) + neighbor.weight;
                if (candidate < distances.get(neighbor.node)) {
                    distances.set(neighbor.node, candidate);
                    previous.set(neighbor.node, smallest);
                    nodes.enqueue(neighbor.node, candidate);
                }
            }
        }
    }
    return path.reverse();
}

module.exports = WeightedGraph;