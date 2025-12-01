

export let mockData = {
  tables: [
    {
      id: '1',
      name: 'table-1',
      // isCollapse: true,
      fields: [
        {
          name: 'id',
          title: '',
        },
        {
          name: 'age',
          title: 'age',
        },
      ],
    },
    {
      id: '2',
      name: 'table-2',
      // isCollapse: true,
      fields: [
        {
          name: 'id',
          title: 'id',
        },
        {
          name: 'age',
          title: 'age',
        },
        {
          name: 'id2',
          title: 'id2',
        },
        {
          name: 'age2',
          title: 'age2',
        },
        {
          name: 'id3',
          title: 'id3',
        },
        {
          name: 'age3',
          title: 'age3',
        },
        {
          name: 'id4',
          title: 'id4',
        },
        {
          name: 'age4',
          title: 'age4',
        },
      ],
    },
    {
      id: '3',
      name: 'table-3',
      isCollapse: false,
      fields: [
        {
          name: 'id',
          title: 'id',
        },
        {
          name: 'age',
          title: 'age',
        },
      ],
    },
    {
      id: '4',
      name: 'table-4',
      isCollapse: false,
      fields: [
        {
          name: 'id',
          title: 'id',
        },
        {
          name: 'age',
          title: 'age',
        },
      ],
    },
  ],
  relations: [
    {
      srcTableId: '1',
      tgtTableId: '2',
      srcTableColName: 'id',
      tgtTableColName: 'age',
    },
    {
      srcTableId: '1',
      tgtTableId: '2',
      srcTableColName: 'id',
      tgtTableColName: 'id',
    },
    {
      srcTableId: '1',
      tgtTableId: '3',
      srcTableColName: 'id',
      tgtTableColName: 'age',
    },
    {
      srcTableId: '2',
      tgtTableId: '4',
      srcTableColName: 'id',
      tgtTableColName: 'age',
    },
    {
      srcTableId: '2',
      tgtTableId: '4',
      srcTableColName: 'id',
      tgtTableColName: 'id',
    },
  ],
}

export let mockData2 = {
  tables: [
    {
      id: '2',
      name: 'default_',
      isExpand: true,
      fields: [
        {
          name: 'log_time',
          title: 'log_time',
        },
        {
          name: 'request_line',
          title: 'request_line',
        },
        {
          name: 'status_code',
          title: 'status_code',
        },
        {
          name: 'size',
          title: 'size',
        },
      ]
    },
    {
      fields: [
        {
          name: 'log_time',
          title: 'log_time',
        },
        {
          name: 'request_line',
          title: 'request_line',
        },
        {
          name: 'status_code',
          title: 'status_code',
        },
        {
          name: 'size',
          title: 'size',
        },
      ],
      id: '3',
      isExpand: true,
      name: 'abase'
    },
  ],
  relations: [
    {
      id: '2',
      srcTableId: '2',
      tgtTableId: '3',
      srcTableColName: 'log_time',
      tgtTableColName: 'log_time',
    },
    {
      id: '3',
      srcTableId: '2',
      tgtTableId: '3',
      srcTableColName: 'request_line',
      tgtTableColName: 'request_line',
    },
    {
      id: '4',
      srcTableId: '2',
      tgtTableId: '3',
      srcTableColName: 'status_code',
      tgtTableColName: 'status_code',
    },
    {
      id: '5',
      srcTableId: '2',
      tgtTableId: '3',
      srcTableColName: 'size',
      tgtTableColName: 'size',
    },
  ],
}

export const bloodData = {
  "tables": [
      {
          "id": "fd03109061c64fe3a62177eab4b316c3",
          "name": "buaa_hr.auth_dept",
          "nodeType": "MYSQL_INPUT",
          "interactType": "inputNode",
          isExpand: true,
          "fields": [
              {
                  "name": "id"
              },
              {
                  "name": "full_name"
              },
              {
                  "name": "dept_name"
              },
              {
                  "name": "parent_id"
              },
              {
                  "name": "level"
              },
              {
                  "name": "enable"
              },
              {
                  "name": "sort"
              },
              {
                  "name": "deleted"
              },
              {
                  "name": "update_user"
              },
              {
                  "name": "update_time"
              },
              {
                  "name": "create_user"
              },
              {
                  "name": "create_time"
              },
              {
                  "name": "is_team"
              }
          ],
          "chooseColumns": [
              {
                  "name": "id"
              },
              {
                  "name": "full_name"
              },
              {
                  "name": "dept_name"
              },
              {
                  "name": "parent_id"
              },
              {
                  "name": "level"
              },
              {
                  "name": "enable"
              },
              {
                  "name": "sort"
              },
              {
                  "name": "deleted"
              },
              {
                  "name": "update_user"
              },
              {
                  "name": "update_time"
              },
              {
                  "name": "create_user"
              },
              {
                  "name": "create_time"
              },
              {
                  "name": "is_team"
              }
          ]
      },
      {
          "id": "6cdfa0ea86194bd9b161ade6b58efa2d",
          "name": "buaa_hr.auth_dept_copy",
          "nodeType": "MYSQL_INPUT",
          "interactType": "inputNode",
          isExpand: true,
          "fields": [
              {
                  "name": "id"
              },
              {
                  "name": "full_name"
              },
              {
                  "name": "dept_name"
              },
              {
                  "name": "parent_id"
              },
              {
                  "name": "level"
              },
              {
                  "name": "enable"
              },
              {
                  "name": "sort"
              },
              {
                  "name": "deleted"
              },
              {
                  "name": "update_user"
              },
              {
                  "name": "update_time"
              },
              {
                  "name": "create_user"
              },
              {
                  "name": "create_time"
              },
              {
                  "name": "is_team"
              }
          ],
          "chooseColumns": [
              {
                  "name": "id"
              },
              {
                  "name": "full_name"
              },
              {
                  "name": "dept_name"
              },
              {
                  "name": "parent_id"
              },
              {
                  "name": "level"
              },
              {
                  "name": "enable"
              },
              {
                  "name": "sort"
              },
              {
                  "name": "deleted"
              },
              {
                  "name": "update_user"
              },
              {
                  "name": "update_time"
              },
              {
                  "name": "create_user"
              },
              {
                  "name": "create_time"
              },
              {
                  "name": "is_team"
              }
          ]
      },
      {
          "id": "f508880173534a63b3b06052a6fed7a3",
          "name": "多表合并",
          "nodeType": "TABLE_MERGE",
          "interactType": "transformNode",
          isExpand: true,
          "relation": [
              {
                  "srcTableId": "6cdfa0ea86194bd9b161ade6b58efa2d",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "id",
                  "tgtTableColName": "id"
              },
              {
                  "srcTableId": "6cdfa0ea86194bd9b161ade6b58efa2d",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "full_name",
                  "tgtTableColName": "full_name"
              },
              {
                  "srcTableId": "6cdfa0ea86194bd9b161ade6b58efa2d",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "dept_name",
                  "tgtTableColName": "dept_name"
              },
              {
                  "srcTableId": "6cdfa0ea86194bd9b161ade6b58efa2d",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "parent_id",
                  "tgtTableColName": "parent_id"
              },
              {
                  "srcTableId": "6cdfa0ea86194bd9b161ade6b58efa2d",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "level",
                  "tgtTableColName": "level"
              },
              {
                  "srcTableId": "6cdfa0ea86194bd9b161ade6b58efa2d",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "enable",
                  "tgtTableColName": "enable"
              },
              {
                  "srcTableId": "6cdfa0ea86194bd9b161ade6b58efa2d",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "sort",
                  "tgtTableColName": "sort"
              },
              {
                  "srcTableId": "6cdfa0ea86194bd9b161ade6b58efa2d",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "deleted",
                  "tgtTableColName": "deleted"
              },
              {
                  "srcTableId": "6cdfa0ea86194bd9b161ade6b58efa2d",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "update_user",
                  "tgtTableColName": "update_user"
              },
              {
                  "srcTableId": "6cdfa0ea86194bd9b161ade6b58efa2d",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "update_time",
                  "tgtTableColName": "update_time"
              },
              {
                  "srcTableId": "6cdfa0ea86194bd9b161ade6b58efa2d",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "create_user",
                  "tgtTableColName": "create_user"
              },
              {
                  "srcTableId": "6cdfa0ea86194bd9b161ade6b58efa2d",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "create_time",
                  "tgtTableColName": "create_time"
              },
              {
                  "srcTableId": "6cdfa0ea86194bd9b161ade6b58efa2d",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "is_team",
                  "tgtTableColName": "is_team"
              },
              {
                  "srcTableId": "abaef799ca92464885f57c9cc7a7969f",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "dept_id_1",
                  "tgtTableColName": "id"
              },
              {
                  "srcTableId": "abaef799ca92464885f57c9cc7a7969f",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "full_name",
                  "tgtTableColName": "full_name"
              },
              {
                  "srcTableId": "abaef799ca92464885f57c9cc7a7969f",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "dept_name",
                  "tgtTableColName": "dept_name"
              },
              {
                  "srcTableId": "abaef799ca92464885f57c9cc7a7969f",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "parent_id",
                  "tgtTableColName": "parent_id"
              },
              {
                  "srcTableId": "abaef799ca92464885f57c9cc7a7969f",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "level",
                  "tgtTableColName": "level"
              },
              {
                  "srcTableId": "abaef799ca92464885f57c9cc7a7969f",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "enable",
                  "tgtTableColName": "enable"
              },
              {
                  "srcTableId": "abaef799ca92464885f57c9cc7a7969f",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "sort",
                  "tgtTableColName": "sort"
              },
              {
                  "srcTableId": "abaef799ca92464885f57c9cc7a7969f",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "deleted",
                  "tgtTableColName": "deleted"
              },
              {
                  "srcTableId": "abaef799ca92464885f57c9cc7a7969f",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "update_user",
                  "tgtTableColName": "update_user"
              },
              {
                  "srcTableId": "abaef799ca92464885f57c9cc7a7969f",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "update_time",
                  "tgtTableColName": "update_time"
              },
              {
                  "srcTableId": "abaef799ca92464885f57c9cc7a7969f",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "special",
                  "tgtTableColName": "create_user"
              },
              {
                  "srcTableId": "abaef799ca92464885f57c9cc7a7969f",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": {},
                  "tgtTableColName": "create_time"
              },
              {
                  "srcTableId": "abaef799ca92464885f57c9cc7a7969f",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": {},
                  "tgtTableColName": "is_team"
              },
              {
                  "srcTableId": "fd03109061c64fe3a62177eab4b316c3",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "id",
                  "tgtTableColName": "id"
              },
              {
                  "srcTableId": "fd03109061c64fe3a62177eab4b316c3",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "full_name",
                  "tgtTableColName": "full_name"
              },
              {
                  "srcTableId": "fd03109061c64fe3a62177eab4b316c3",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "dept_name",
                  "tgtTableColName": "dept_name"
              },
              {
                  "srcTableId": "fd03109061c64fe3a62177eab4b316c3",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "parent_id",
                  "tgtTableColName": "parent_id"
              },
              {
                  "srcTableId": "fd03109061c64fe3a62177eab4b316c3",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "level",
                  "tgtTableColName": "level"
              },
              {
                  "srcTableId": "fd03109061c64fe3a62177eab4b316c3",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "enable",
                  "tgtTableColName": "enable"
              },
              {
                  "srcTableId": "fd03109061c64fe3a62177eab4b316c3",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "sort",
                  "tgtTableColName": "sort"
              },
              {
                  "srcTableId": "fd03109061c64fe3a62177eab4b316c3",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "deleted",
                  "tgtTableColName": "deleted"
              },
              {
                  "srcTableId": "fd03109061c64fe3a62177eab4b316c3",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "update_user",
                  "tgtTableColName": "update_user"
              },
              {
                  "srcTableId": "fd03109061c64fe3a62177eab4b316c3",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "update_time",
                  "tgtTableColName": "update_time"
              },
              {
                  "srcTableId": "fd03109061c64fe3a62177eab4b316c3",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "create_user",
                  "tgtTableColName": "create_user"
              },
              {
                  "srcTableId": "fd03109061c64fe3a62177eab4b316c3",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "create_time",
                  "tgtTableColName": "create_time"
              },
              {
                  "srcTableId": "fd03109061c64fe3a62177eab4b316c3",
                  "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
                  "srcTableColName": "is_team",
                  "tgtTableColName": "is_team"
              }
          ],
          "fields": [
              {
                  "name": "id"
              },
              {
                  "name": "full_name"
              },
              {
                  "name": "dept_name"
              },
              {
                  "name": "parent_id"
              },
              {
                  "name": "level"
              },
              {
                  "name": "enable"
              },
              {
                  "name": "sort"
              },
              {
                  "name": "deleted"
              },
              {
                  "name": "update_user"
              },
              {
                  "name": "update_time"
              },
              {
                  "name": "create_user"
              },
              {
                  "name": "create_time"
              },
              {
                  "name": "is_team"
              }
          ]
      },
      {
          "id": "8a1c57bf3c914b618c90d0614a9def79",
          "name": "buaa_hr.test_dept_together1",
          "nodeType": "MYSQL_OUTPUT",
          "interactType": "outputNode",
          isExpand: true,
          "fields": [
              {
                  "name": "full_name",
                  "alias": "full_name"
              },
              {
                  "name": "dept_name",
                  "alias": "dept_name"
              },
              {
                  "name": "parent_id",
                  "alias": "parent_id"
              },
              {
                  "name": "level",
                  "alias": "level"
              },
              {
                  "name": "enable",
                  "alias": "enable"
              },
              {
                  "name": "sort",
                  "alias": "sort"
              },
              {
                  "name": "deleted",
                  "alias": "deleted"
              },
              {
                  "name": "update_user",
                  "alias": "update_user"
              },
              {
                  "name": "update_time",
                  "alias": "update_time"
              },
              {
                  "name": "id",
                  "alias": "id"
              },
              {
                  "name": "create_user",
                  "alias": "create_user"
              },
              {
                  "name": "create_time",
                  "alias": "create_time"
              },
              {
                  "name": "is_team",
                  "alias": "is_team"
              }
          ]
      },
      {
          "id": "abaef799ca92464885f57c9cc7a7969f",
          "name": "buaa_hr.auth_dept_copy1",
          "nodeType": "MYSQL_INPUT",
          "interactType": "inputNode",
          isExpand: true,
          "fields": [
              {
                  "name": "dept_id_1"
              },
              {
                  "name": "full_name"
              },
              {
                  "name": "dept_name"
              },
              {
                  "name": "parent_id"
              },
              {
                  "name": "level"
              },
              {
                  "name": "enable"
              },
              {
                  "name": "sort"
              },
              {
                  "name": "deleted"
              },
              {
                  "name": "update_user"
              },
              {
                  "name": "update_time"
              },
              {
                  "name": "special"
              }
          ],
          "chooseColumns": [
              {
                  "name": "dept_id_1"
              },
              {
                  "name": "full_name"
              },
              {
                  "name": "dept_name"
              },
              {
                  "name": "parent_id"
              },
              {
                  "name": "level"
              },
              {
                  "name": "enable"
              },
              {
                  "name": "sort"
              },
              {
                  "name": "deleted"
              },
              {
                  "name": "update_user"
              },
              {
                  "name": "update_time"
              },
              {
                  "name": "special"
              }
          ]
      }
  ],
  "relations": [
      {
          "id": "relation_49",
          "srcTableId": "f508880173534a63b3b06052a6fed7a3",
          "tgtTableId": "8a1c57bf3c914b618c90d0614a9def79",
          "srcTableColName": "full_name",
          "tgtTableColName": "full_name"
      },
      {
          "id": "relation_50",
          "srcTableId": "f508880173534a63b3b06052a6fed7a3",
          "tgtTableId": "8a1c57bf3c914b618c90d0614a9def79",
          "srcTableColName": "dept_name",
          "tgtTableColName": "dept_name"
      },
      {
          "id": "relation_51",
          "srcTableId": "f508880173534a63b3b06052a6fed7a3",
          "tgtTableId": "8a1c57bf3c914b618c90d0614a9def79",
          "srcTableColName": "parent_id",
          "tgtTableColName": "parent_id"
      },
      {
          "id": "relation_52",
          "srcTableId": "f508880173534a63b3b06052a6fed7a3",
          "tgtTableId": "8a1c57bf3c914b618c90d0614a9def79",
          "srcTableColName": "level",
          "tgtTableColName": "level"
      },
      {
          "id": "relation_53",
          "srcTableId": "f508880173534a63b3b06052a6fed7a3",
          "tgtTableId": "8a1c57bf3c914b618c90d0614a9def79",
          "srcTableColName": "enable",
          "tgtTableColName": "enable"
      },
      {
          "id": "relation_54",
          "srcTableId": "f508880173534a63b3b06052a6fed7a3",
          "tgtTableId": "8a1c57bf3c914b618c90d0614a9def79",
          "srcTableColName": "sort",
          "tgtTableColName": "sort"
      },
      {
          "id": "relation_55",
          "srcTableId": "f508880173534a63b3b06052a6fed7a3",
          "tgtTableId": "8a1c57bf3c914b618c90d0614a9def79",
          "srcTableColName": "deleted",
          "tgtTableColName": "deleted"
      },
      {
          "id": "relation_56",
          "srcTableId": "f508880173534a63b3b06052a6fed7a3",
          "tgtTableId": "8a1c57bf3c914b618c90d0614a9def79",
          "srcTableColName": "update_user",
          "tgtTableColName": "update_user"
      },
      {
          "id": "relation_57",
          "srcTableId": "f508880173534a63b3b06052a6fed7a3",
          "tgtTableId": "8a1c57bf3c914b618c90d0614a9def79",
          "srcTableColName": "update_time",
          "tgtTableColName": "update_time"
      },
      {
          "id": "relation_58",
          "srcTableId": "f508880173534a63b3b06052a6fed7a3",
          "tgtTableId": "8a1c57bf3c914b618c90d0614a9def79",
          "srcTableColName": "id",
          "tgtTableColName": "id"
      },
      {
          "id": "relation_59",
          "srcTableId": "f508880173534a63b3b06052a6fed7a3",
          "tgtTableId": "8a1c57bf3c914b618c90d0614a9def79",
          "srcTableColName": "create_user",
          "tgtTableColName": "create_user"
      },
      {
          "id": "relation_60",
          "srcTableId": "f508880173534a63b3b06052a6fed7a3",
          "tgtTableId": "8a1c57bf3c914b618c90d0614a9def79",
          "srcTableColName": "create_time",
          "tgtTableColName": "create_time"
      },
      {
          "id": "relation_61",
          "srcTableId": "f508880173534a63b3b06052a6fed7a3",
          "tgtTableId": "8a1c57bf3c914b618c90d0614a9def79",
          "srcTableColName": "is_team",
          "tgtTableColName": "is_team"
      },
      {
          "id": "relation_62",
          "srcTableId": "6cdfa0ea86194bd9b161ade6b58efa2d",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "id",
          "tgtTableColName": "id"
      },
      {
          "id": "relation_63",
          "srcTableId": "6cdfa0ea86194bd9b161ade6b58efa2d",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "full_name",
          "tgtTableColName": "full_name"
      },
      {
          "id": "relation_64",
          "srcTableId": "6cdfa0ea86194bd9b161ade6b58efa2d",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "dept_name",
          "tgtTableColName": "dept_name"
      },
      {
          "id": "relation_65",
          "srcTableId": "6cdfa0ea86194bd9b161ade6b58efa2d",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "parent_id",
          "tgtTableColName": "parent_id"
      },
      {
          "id": "relation_66",
          "srcTableId": "6cdfa0ea86194bd9b161ade6b58efa2d",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "level",
          "tgtTableColName": "level"
      },
      {
          "id": "relation_67",
          "srcTableId": "6cdfa0ea86194bd9b161ade6b58efa2d",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "enable",
          "tgtTableColName": "enable"
      },
      {
          "id": "relation_68",
          "srcTableId": "6cdfa0ea86194bd9b161ade6b58efa2d",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "sort",
          "tgtTableColName": "sort"
      },
      {
          "id": "relation_69",
          "srcTableId": "6cdfa0ea86194bd9b161ade6b58efa2d",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "deleted",
          "tgtTableColName": "deleted"
      },
      {
          "id": "relation_70",
          "srcTableId": "6cdfa0ea86194bd9b161ade6b58efa2d",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "update_user",
          "tgtTableColName": "update_user"
      },
      {
          "id": "relation_71",
          "srcTableId": "6cdfa0ea86194bd9b161ade6b58efa2d",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "update_time",
          "tgtTableColName": "update_time"
      },
      {
          "id": "relation_72",
          "srcTableId": "6cdfa0ea86194bd9b161ade6b58efa2d",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "create_user",
          "tgtTableColName": "create_user"
      },
      {
          "id": "relation_73",
          "srcTableId": "6cdfa0ea86194bd9b161ade6b58efa2d",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "create_time",
          "tgtTableColName": "create_time"
      },
      {
          "id": "relation_74",
          "srcTableId": "6cdfa0ea86194bd9b161ade6b58efa2d",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "is_team",
          "tgtTableColName": "is_team"
      },
      {
          "id": "relation_75",
          "srcTableId": "abaef799ca92464885f57c9cc7a7969f",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "full_name",
          "tgtTableColName": "full_name"
      },
      {
          "id": "relation_76",
          "srcTableId": "abaef799ca92464885f57c9cc7a7969f",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "dept_name",
          "tgtTableColName": "dept_name"
      },
      {
          "id": "relation_77",
          "srcTableId": "abaef799ca92464885f57c9cc7a7969f",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "parent_id",
          "tgtTableColName": "parent_id"
      },
      {
          "id": "relation_78",
          "srcTableId": "abaef799ca92464885f57c9cc7a7969f",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "level",
          "tgtTableColName": "level"
      },
      {
          "id": "relation_79",
          "srcTableId": "abaef799ca92464885f57c9cc7a7969f",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "enable",
          "tgtTableColName": "enable"
      },
      {
          "id": "relation_80",
          "srcTableId": "abaef799ca92464885f57c9cc7a7969f",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "sort",
          "tgtTableColName": "sort"
      },
      {
          "id": "relation_81",
          "srcTableId": "abaef799ca92464885f57c9cc7a7969f",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "deleted",
          "tgtTableColName": "deleted"
      },
      {
          "id": "relation_82",
          "srcTableId": "abaef799ca92464885f57c9cc7a7969f",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "update_user",
          "tgtTableColName": "update_user"
      },
      {
          "id": "relation_83",
          "srcTableId": "abaef799ca92464885f57c9cc7a7969f",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "update_time",
          "tgtTableColName": "update_time"
      },
      {
          "id": "relation_84",
          "srcTableId": "fd03109061c64fe3a62177eab4b316c3",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "id",
          "tgtTableColName": "id"
      },
      {
          "id": "relation_85",
          "srcTableId": "fd03109061c64fe3a62177eab4b316c3",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "full_name",
          "tgtTableColName": "full_name"
      },
      {
          "id": "relation_86",
          "srcTableId": "fd03109061c64fe3a62177eab4b316c3",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "dept_name",
          "tgtTableColName": "dept_name"
      },
      {
          "id": "relation_87",
          "srcTableId": "fd03109061c64fe3a62177eab4b316c3",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "parent_id",
          "tgtTableColName": "parent_id"
      },
      {
          "id": "relation_88",
          "srcTableId": "fd03109061c64fe3a62177eab4b316c3",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "level",
          "tgtTableColName": "level"
      },
      {
          "id": "relation_89",
          "srcTableId": "fd03109061c64fe3a62177eab4b316c3",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "enable",
          "tgtTableColName": "enable"
      },
      {
          "id": "relation_90",
          "srcTableId": "fd03109061c64fe3a62177eab4b316c3",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "sort",
          "tgtTableColName": "sort"
      },
      {
          "id": "relation_91",
          "srcTableId": "fd03109061c64fe3a62177eab4b316c3",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "deleted",
          "tgtTableColName": "deleted"
      },
      {
          "id": "relation_92",
          "srcTableId": "fd03109061c64fe3a62177eab4b316c3",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "update_user",
          "tgtTableColName": "update_user"
      },
      {
          "id": "relation_93",
          "srcTableId": "fd03109061c64fe3a62177eab4b316c3",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "update_time",
          "tgtTableColName": "update_time"
      },
      {
          "id": "relation_94",
          "srcTableId": "fd03109061c64fe3a62177eab4b316c3",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "create_user",
          "tgtTableColName": "create_user"
      },
      {
          "id": "relation_95",
          "srcTableId": "fd03109061c64fe3a62177eab4b316c3",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "create_time",
          "tgtTableColName": "create_time"
      },
      {
          "id": "relation_96",
          "srcTableId": "fd03109061c64fe3a62177eab4b316c3",
          "tgtTableId": "f508880173534a63b3b06052a6fed7a3",
          "srcTableColName": "is_team",
          "tgtTableColName": "is_team"
      }
  ]
}