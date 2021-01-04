/*
 * Copyright 2020 Uber Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** @file
 * @brief tests H3 vertex functions.
 *
 *  usage: `testVertex`
 */

#include "test.h"
#include "utility.h"
#include "vertex.h"

static void directionForVertexNum_symmetry_assertions(H3Index h3) {
    int numVerts = H3_EXPORT(h3IsPentagon)(h3) ? NUM_PENT_VERTS : NUM_HEX_VERTS;
    for (int i = 0; i < numVerts; i++) {
        Direction dir = directionForVertexNum(h3, i);
        int vertexNum = vertexNumForDirection(h3, dir);
        t_assert(
            vertexNum == i,
            "directionForVertexNum and vertexNumForDirection are symmetrical");
    }
}

static void getCellVertex_point_assertions(H3Index h3) {
    GeoBoundary gb;
    H3_EXPORT(h3ToGeoBoundary)(h3, &gb);
    int numVerts = H3_EXPORT(h3IsPentagon)(h3) ? NUM_PENT_VERTS : NUM_HEX_VERTS;

    // This test won't work if there are distortion vertexes in the boundary
    if (numVerts < gb.numVerts) return;

    GeoCoord coord;
    for (int i = 0; i < numVerts; i++) {
        H3Index vertex = getCellVertex(h3, i);
        vertexToPoint(vertex, &coord);
        int almostEqual =
            geoAlmostEqualThreshold(&gb.verts[i], &coord, 0.000001);
        t_assert(almostEqual, "Vertex coordinates match boundary vertex");
    }
}

static void getCellVertex_uniqueness_assertions(H3Index h3) {
    H3Index originVerts[NUM_HEX_VERTS] = {0};
    getCellVertexes(h3, originVerts);

    for (int v1 = 0; v1 < NUM_HEX_VERTS - 1; v1++) {
        for (int v2 = v1 + 1; v2 < NUM_HEX_VERTS; v2++) {
            if (originVerts[v1] == originVerts[v2]) {
                t_assert(false, "vertex should be unique");
            }
        }
    }
}

static void getCellVertex_neighbor_assertions(H3Index h3) {
    const int cellCount = 7;

    H3Index neighbors[cellCount] = {0};
    H3Index originVerts[NUM_HEX_VERTS] = {0};
    H3Index neighborVerts[NUM_HEX_VERTS] = {0};

    H3_EXPORT(kRing)(h3, 1, neighbors);
    getCellVertexes(h3, originVerts);

    for (int i = 0; i < cellCount; i++) {
        H3Index neighbor = neighbors[i];
        if (neighbor == H3_NULL || neighbor == h3) continue;
        getCellVertexes(neighbor, neighborVerts);

        // calculate the set intersection
        int intersection = 0;
        for (int v1 = 0; v1 < NUM_HEX_VERTS; v1++) {
            for (int v2 = 0; v2 < NUM_HEX_VERTS; v2++) {
                if (neighborVerts[v1] == originVerts[v2]) {
                    intersection++;
                }
            }
        }

        t_assert(intersection == 2,
                 "Neigbor shares 2 unique vertexes with origin");
    }
}

SUITE(Vertex) {
    TEST(vertexNumForDirection_hex) {
        H3Index origin = 0x823d6ffffffffff;
        int vertexNums[NUM_HEX_VERTS] = {0};
        for (Direction dir = K_AXES_DIGIT; dir < NUM_DIGITS; dir++) {
            int vertexNum = vertexNumForDirection(origin, dir);
            t_assert(vertexNum >= 0 && vertexNum < NUM_HEX_VERTS,
                     "vertex number appears valid");
            t_assert(!vertexNums[vertexNum], "vertex number appears only once");
            vertexNums[vertexNum] = 1;
        }
    }

    TEST(vertexNumForDirection_pent) {
        H3Index pentagon = 0x823007fffffffff;
        int vertexNums[NUM_PENT_VERTS] = {0};
        for (Direction dir = J_AXES_DIGIT; dir < NUM_DIGITS; dir++) {
            int vertexNum = vertexNumForDirection(pentagon, dir);
            t_assert(vertexNum >= 0 && vertexNum < NUM_PENT_VERTS,
                     "vertex number appears valid");
            t_assert(!vertexNums[vertexNum], "vertex number appears only once");
            vertexNums[vertexNum] = 1;
        }
    }

    TEST(vertexNumForDirection_badDirections) {
        H3Index origin = 0x823007fffffffff;

        t_assert(
            vertexNumForDirection(origin, CENTER_DIGIT) == INVALID_VERTEX_NUM,
            "center digit should return invalid vertex");
        t_assert(
            vertexNumForDirection(origin, INVALID_DIGIT) == INVALID_VERTEX_NUM,
            "invalid digit should return invalid vertex");

        H3Index pentagon = 0x823007fffffffff;
        t_assert(
            vertexNumForDirection(pentagon, K_AXES_DIGIT) == INVALID_VERTEX_NUM,
            "K direction on pentagon should return invalid vertex");
    }

    // TODO: Move to exhaustive suite
    TEST(directionForVertexNum_symmetry) {
        iterateAllIndexesAtRes(0, directionForVertexNum_symmetry_assertions);
        iterateAllIndexesAtRes(1, directionForVertexNum_symmetry_assertions);
        iterateAllIndexesAtRes(2, directionForVertexNum_symmetry_assertions);
    }

    // TODO: Move to exhaustive suite
    TEST(getCellVertex_point) {
        printf("getCellVertex_point\n");
        iterateAllIndexesAtRes(0, getCellVertex_point_assertions);
        iterateAllIndexesAtRes(1, getCellVertex_point_assertions);
        iterateAllIndexesAtRes(2, getCellVertex_point_assertions);
        iterateAllIndexesAtRes(3, getCellVertex_point_assertions);
        iterateAllIndexesAtRes(4, getCellVertex_point_assertions);

        // Res 5: normal base cell
        iterateBaseCellIndexesAtRes(5, getCellVertex_point_assertions, 0);
        // Res 5: pentagon base cell
        iterateBaseCellIndexesAtRes(5, getCellVertex_point_assertions, 14);
        // Res 5: polar pentagon base cell
        iterateBaseCellIndexesAtRes(5, getCellVertex_point_assertions, 117);
    }

    // TODO: Move to exhaustive suite
    TEST(getCellVertex_neighbors) {
        printf("getCellVertex_neighbors\n");
        iterateAllIndexesAtRes(0, getCellVertex_neighbor_assertions);
        iterateAllIndexesAtRes(1, getCellVertex_neighbor_assertions);
        iterateAllIndexesAtRes(2, getCellVertex_neighbor_assertions);
        iterateAllIndexesAtRes(3, getCellVertex_neighbor_assertions);
        iterateAllIndexesAtRes(4, getCellVertex_neighbor_assertions);
    }

    // TODO: Move to exhaustive suite
    TEST(getCellVertex_uniqueness) {
        printf("getCellVertex_uniqueness\n");
        iterateAllIndexesAtRes(0, getCellVertex_uniqueness_assertions);
        iterateAllIndexesAtRes(1, getCellVertex_uniqueness_assertions);
        iterateAllIndexesAtRes(2, getCellVertex_uniqueness_assertions);
        iterateAllIndexesAtRes(3, getCellVertex_uniqueness_assertions);
        iterateAllIndexesAtRes(4, getCellVertex_uniqueness_assertions);
    }
}