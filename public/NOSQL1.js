//Part 1.1
var json1 = {
    "test" : 1
};

var json2 = {
    "name" : "Nicolas"
};

var json3 = {
	"identity": {
		"firstname": "Nicolas",
		"lastname": "Travers"
	}
};

var json4 = {
	"lectures": ["MESIGI3715", {
		"title": "Databases"
	}, "MESIGI3942", 25]
};

var json5 = {
	"type": "object",
	"properties": {
		"id": {
			"description": "The unique identifier for a product",
			"type": "integer"
		},
		"name": {
			"description": "Name of the product",
			"type": "string"
		},
		"price": {
			"type": "number",
			"minimum": 0,
			"exclusiveMinimum": true
		},
		"required": ["id", "name", "price"]
	}
};

//Part 1.2
var json6 = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      }
    },
    "required": [
      "name"
    ]
  };

var json7 = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "identity": {
        "type": "object",
        "properties": {
          "firstname": {
            "type": "string"
          },
          "lastname": {
            "type": "string"
          }
        },
        "required": [
          "firstname",
          "lastname"
        ]
      }
    },
    "required": [
      "identity"
    ]
  };

var json8 = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "lectures": {
        "type": "array",
        "items": [
          {
            "type": "string"
          },
          {
            "type": "object",
            "properties": {
              "title": {
                "type": "string"
              }
            },
            "required": [
              "title"
            ]
          },
          {
            "type": "string"
          },
          {
            "type": "integer"
          }
        ]
      }
    },
    "required": [
      "lectures"
    ]
  };

var json9 = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "type": {
        "type": "string"
      },
      "properties": {
        "type": "object",
        "properties": {
          "id": {
            "type": "object",
            "properties": {
              "description": {
                "type": "string"
              },
              "type": {
                "type": "string"
              }
            },
            "required": [
              "description",
              "type"
            ]
          },
          "name": {
            "type": "object",
            "properties": {
              "description": {
                "type": "string"
              },
              "type": {
                "type": "string"
              }
            },
            "required": [
              "description",
              "type"
            ]
          },
          "price": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string"
              },
              "minimum": {
                "type": "integer"
              },
              "exclusiveMinimum": {
                "type": "boolean"
              }
            },
            "required": [
              "type",
              "minimum",
              "exclusiveMinimum"
            ]
          },
          "required": {
            "type": "array",
            "items": [
              {
                "type": "string"
              },
              {
                "type": "string"
              },
              {
                "type": "string"
              }
            ]
          }
        },
        "required": [
          "id",
          "name",
          "price",
          "required"
        ]
      }
    },
    "required": [
      "type",
      "properties"
    ]
  }

//Part 1.3
//1.3.1
var product = {
    "id" : 1,
    "name" : "Sony W800 Digital Camera",
    "price" : 108,
    "category" : "Camera",
    "label" : "Sony"
};

var client = {
    "id" : 1,
    "firsname" : "George",
    "lastname" : "Lucas",
    "adress" : {"name" : "Skywalker Ranch",
                "street" : "Nicasio",
                "state" : "California"
                },
    "zipcode" : 94946,
    "country" : "USA"
};

var order = {
    "id_client" : 1,
    "id_product" : 2,
    "date" : "2011-09-11",
    "amount" : 1
};

var stock = {
    "id_product" : 1,
    "zipcode" : 90049,
    "stock" : 123
};

//1.3.2
var product_v2 = {
    "id" : 1,
    "name" : "Sony W800 Digital Camera",
    "price" : 108,
    "category" : ["Camera", "High-Tech"],
    "label" : "Sony"
};

//1.3.3
var client_2 = {
    "id" : 3,
    "firsname" : "Sean",
    "lastname" : "Connery",
    "adress" : {"name" : "Creative Artist Agency",
                "number" : 2000,
                "street" : "Avenue of the Stars",
                "city": "Los Angeles",
                "state" : "California"
                },
    "zipcode" : 90067,
    "country" : "USA"
};

//1.4.1
var order_denorm = [
{
    "id_client" : 1,
    "id_product" : 2,
    "date" : "2011-09-11",
    "amount" : 1
},
{
    "id_client" : 1,
    "id_product" : 3,
    "date" : "2015-10-27",
    "amount" : 1
}
];

var stock_denorm = [
{
    "id_product" : 1,
    "zipcode" : 90049,
    "stock" : 123
},
{
    "id_product" : 2,
    "zipcode" : 90049,
    "stock" : 25000
}
];