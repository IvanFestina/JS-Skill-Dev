// Поиск кратчайшего пути в графе

const graph = {}
graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}

    function shortPath(graph, start, end) {
        const costs = {}; // shortest paths
        const processed = []; // checked nodes
        let neighbors = {}
        Object.keys(graph).forEach(node => {
            // console.log(node)
            if(node !== start) {
                let value = graph[start][node];
                // console.log(value)
                costs[node] = value || 100000000
            }
        })
        // console.log(costs)
        let node = findNodeLowestCost(costs, processed)
        while (node) {
            const cost = costs[node];
            neighbors = graph[node]
            // console.log(neighbors)
            Object.keys(neighbors).forEach(neighbor => {
                let newCost = cost + neighbors[neighbor]
                if (newCost < costs[neighbor]) {
                    costs[neighbor] = newCost
                }
            })
            processed.push(node)
            node = findNodeLowestCost(costs, processed)
        }
        return costs
    }

function findNodeLowestCost(costs, processed) {
        let lowestCost = 10000000;
        let lowestNode;
        Object.keys(costs).forEach(node => {
            // console.log('node ',node)
            let cost = costs[node]
            // console.log(cost)
            if(cost < lowestCost && !processed.includes(node)) {
                lowestCost = cost;
                lowestNode = node;
            }
        })
            // console.log(lowestNode)
        return lowestNode
        }



console.log(shortPath(graph, 'a', 'g'))