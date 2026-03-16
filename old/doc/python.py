import unittest
import requests
from google.protobuf.json_format import MessageToDict
import sys
import os

# 假设您的 Protobuf 生成的 Python 文件在 src/_apitest/testmenu 目录下
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'src', '_apitest', 'testmenu'))
import testtb_pb2

BASE_URL = "http://localhost:3004"  # 假设这是您的API地址

class ProtobufTests(unittest.TestCase):
    def test_protobuf_encode_and_decode(self):
        try:
            print("开始 Protobuf 测试")

            response = requests.get(f"{BASE_URL}/apitest/testmenu/testtb/testProto", 
                                    headers={'Accept': 'application/x-protobuf'})
            print(f"HTTP 请求成功，状态码: {response.status_code}")

            testtb_message = testtb_pb2.testtb()
            testtb_message.ParseFromString(response.content)

            print(f"Protobuf 消息解码成功，项目数量: {len(testtb_message.items)}")

            self.assertTrue(len(testtb_message.items) > 0)

            first_item = testtb_message.items[0]
            self.assertTrue(first_item.kind)
            self.assertTrue(first_item.item)
            self.assertTrue(first_item.data)
            self.assertTrue(first_item.id)
            self.assertTrue(first_item.idpk > 0)

            print(f"第一个项目: {MessageToDict(first_item)}")

        except Exception as e:
            print(f"测试错误: {str(e)}", file=sys.stderr)
            raise

if __name__ == '__main__':
    unittest.main()