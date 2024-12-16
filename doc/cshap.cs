using System;
using System.Net.Http;
using System.Threading.Tasks;
using Google.Protobuf;
using NUnit.Framework;
using ApitestTestmenu;

//[TestFixture]
public class ProtobufTests
{
    private const string BaseUrl = "http://localhost:3004"; // 假设这是您的API地址

    //[Test]
    public async Task TestProtobufEncodeAndDecode()
    {
        try
        {
            Console.WriteLine("开始 Protobuf 测试");

            var client = new HttpClient();
            client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/x-protobuf"));

            var response = await client.GetAsync($"{BaseUrl}/apitest/testmenu/testtb/testProto");
            Console.WriteLine($"HTTP 请求成功，状态码: {response.StatusCode}");

            var content = await response.Content.ReadAsByteArrayAsync();

            // 假设您已经生成了对应的 C# Protobuf 类
            var message = testtb.Parser.ParseFrom(content);

            Console.WriteLine($"Protobuf 消息解码成功，项目数量: {message.Items.Count}");

            Assert.That(message.Items, Is.Not.Empty);

            var firstItem = message.Items[0];
            Assert.That(firstItem.Kind, Is.Not.Null.Or.Empty);
            Assert.That(firstItem.Item_, Is.Not.Null.Or.Empty);
            Assert.That(firstItem.Data, Is.Not.Null.Or.Empty);
            Assert.That(firstItem.Id, Is.Not.Null.Or.Empty);
            Assert.That(firstItem.Idpk, Is.GreaterThan(0));

            Console.WriteLine($"第一个项目: {firstItem}");
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine($"测试错误: {ex.Message}");
            throw;
        }
    }
}
