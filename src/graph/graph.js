class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex))
            this.adjacencyList.set(vertex, []);
        else
            console.log(`${vertex} exists in graph`);
    }
    addEdge(vertex1, vertex2, directed = true) {
        if (!this.adjacencyList.has(vertex1) || !this.adjacencyList.has(vertex2)) {
            console.log(`vertex does not exist in graph`);
            return;
        }
        if (directed) {
            let edgeList = this.adjacencyList.get(vertex1);
            edgeList.push(vertex2);
        } else {
            let edgeListV1 = this.adjacencyList.get(vertex1);
            edgeListV1.push(vertex2);
            let edgeListV2 = this.adjacencyList.get(vertex2);
            edgeListV2.push(vertex1);
        }
    }
    removeEdge(vertex1, vertex2, directed = true) {
        if (!this.adjacencyList.has(vertex1) || !this.adjacencyList.has(vertex2)) {
            console.log(`vertex does not exist in graph`);
            return;
        }
        if (directed) {
            let edgeList = this.adjacencyList.get(vertex1);
            let index = edgeList.indexOf(vertex2);
            if (index !== -1) {
                edgeList.splice(index, 1);
            }
        } else {
            let edgeListV1 = this.adjacencyList.get(vertex1);
            edgeListV1 = edgeListV1.filter((edge) => edge !== vertex2);
            this.adjacencyList.set(vertex1, edgeListV1);
            // let index = edgeListV1.indexOf(vertex2);
            // if (index !== -1) {
            //     edgeListV1.splice(index, 1);
            // }
            let edgeListV2 = this.adjacencyList.get(vertex2);
            edgeListV2 = edgeListV2.filter((edge) => edge !== vertex1);
            this.adjacencyList.set(vertex2, edgeListV2);
            // index = edgeListV2.indexOf(vertex1);
            // if (index !== -1) {
            //     edgeListV2.splice(index, 1);
            // }
        }
    }
    removeVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            console.log(`vertex does not exist in graph`);
            return;
        }
        let edgeList = this.adjacencyList.get(vertex);
        for (let vertex1 of edgeList) {
            let edges = this.adjacencyList.get(vertex1);
            this.adjacencyList.set(vertex1, edges.filter((edge) => edge !== vertex));
        }
        this.adjacencyList.delete(vertex);
    }

    depthFirstTraversalRecursive(vertex) {
        let visited = new Map();
        let traversalList=[];
        const helper = (v) => {
            if (visited.has(v)) {
                return;
            }
            visited.set(v,true);
            traversalList.push(v);
            let edges = this.adjacencyList.get(v);
            for (let e of edges) {
                helper(e);
            }
            return;
        };
        helper(vertex);
        return traversalList;
    }
    
    depthFirstTraversal(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            return;
        }
        let arr = [vertex];
        let visited = new Map();
        while (true) {
            if (arr.length === 0) {
                break;
            }
            let v = arr.shift();
            if (visited.has(v)) {
                continue;
            } else {
                visited.set(v, true);
            }
            console.log(v);
            if (!visited.has(v)) {
                console.log(v);
            }
            let edges = this.adjacencyList.get(v);
            arr = [...edges, ...arr];
        }
        return;
    }

    breadthFirstTraversal(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            return;
        }
        let arr = [vertex];
        let visited = new Map();
        while (true) {
            if (arr.length === 0) {
                break;
            }
            let v = arr.shift();
            if (visited.has(v)) {
                continue;
            } else {
                visited.set(v, true);
            }
            console.log(v);
            if (!visited.has(v)) {
                console.log(v);
            }
            let edges = this.adjacencyList.get(v);
            arr = [...arr, ...edges];
        }
        return;
    }
}

module.exports = Graph;