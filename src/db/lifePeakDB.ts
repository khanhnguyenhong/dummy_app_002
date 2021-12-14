import { DescriptionTypeEnum } from "../constants/generalEnums";

export class Description {
  id: number;
  type: DescriptionTypeEnum;
  content: string;
  constructor(description?: any) {
    if (description) {
      this.id = description.id;
      this.type = description.type;
      this.content = description.content;
    } else {
      this.id = 0;
      this.type = DescriptionTypeEnum.UNCLASSIFIED;
      this.content = '';
    }
  }
}

export class LifePeak {
  number: number;
  age?: number;
  descriptions: Description[];

  constructor(_lifePeak?: any) {
    if (_lifePeak) {
      this.number = _lifePeak.number;
      this.age = _lifePeak.age;
      this.descriptions = _lifePeak.descriptions;
    } else {
      this.number = 0;
      this.age = 0;
      this.descriptions = [];
    }
  }
}

export const lifePeakDb:LifePeak[] = [
  {
    number: 1,
    descriptions: [
      {
        id: 1,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'ĐỈNH SỐ 1 sẽ chỉ được tìm thấy trên (đôi khi trên cả hai) Kim tự tháp thứ nhất hoặc thứ hai. Trên các Kim tự tháp thứ ba hoặc thứ tư, nó trở thành số 10. Số 1 là một con số thực tế mạnh mẽ cho thấy rằng một thời kỳ nỗ lực cá nhân sắp thành công, một thời kỳ thể hiện cá nhân rõ ràng.',
      },
      {
        id: 2,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'Đối với hầu hết mọi người, điều đó có nghĩa là phải tách khỏi những mối quan hệ trước đây mà ở đó, một số mức độ bất hòa đã kìm hãm sự phát triển cá nhân, chẳng hạn như trong hôn nhân, hiệp hội kinh doanh hoặc quan hệ xã hội. Bạn có thể yên tâm rằng không có hôn nhân, mối quan hệ kinh doanh hoặc tình bạn nào bị cắt đứt trừ khi nó đã phục vụ mục đích của nó. Một số người sẽ chọn cách tránh những sự phân cách như vậy bằng tất cả nỗ lực có thể, thích duy trì hiện trạng. Mặc dù vậy, họ chắc chắn sẽ nhận ra sự thay đổi trong bản chất của mối quan hệ bởi vì họ bắt đầu thể hiện cá tính riêng của mình nhiều hơn và trở nên biểu cảm hơn.',
      },
      {
        id: 3,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'Họ càng tiến bộ về mặt tinh thần (nói cách khác, tâm hồn càng già), họ sẽ càng phát huy tính cá nhân của mình trong năm nay và kể từ đó về sau. Hướng hoạt động của họ thường phù hợp với Số chủ đạo; cách họ thể hiện bản thân sẽ phụ thuộc vào điểm mạnh tính cách của họ được chỉ ra bởi Biểu đồ ngày sinh của họ.',
      },
    ],
  },
  {
    number: 2,
    descriptions: [
      {
        id: 1,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'ĐỈNH SỐ 2 giới thiệu một thời kỳ khi các giá trị tinh thần mạnh mẽ hơn xuất hiện.',
      },
      {
        id: 2,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'Lối sống và thói quen sẽ bao hàm một cách tinh tế hoặc trực quan hơn hoặc theo cảm xúc hơn. Cho dù sự nhấn mạnh về tinh thần biểu hiện như một trạng thái nhận thức được cải thiện (dạng tích cực, mang tính xây dựng nhất) hay như một trạng thái cảm xúc dâng cao (dạng phản ứng và đánh bại), sẽ phụ thuộc vào mức độ trưởng thành đạt được cho đến nay. Rõ ràng khả năng trực giác không thể phát triển nếu cá nhân bị giam cầm bởi cảm xúc.',
      },
      {
        id: 3,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'Đây thường là giai đoạn làm việc vất vả và chậm tiến về vật chất, nhưng chúng ta không thể có được cả hai đường. Hãy nhớ rằng, có một thời điểm thích hợp cho mọi thứ, và một trong những ứng dụng quan trọng nhất của số học là tìm hiểu nhu cầu của chúng ta là gì và đúng cách, cũng như đúng thời điểm để giải quyết chúng. Để thực thi tiến bộ vật chất khi chịu ảnh hưởng của Đỉnh số 2 sẽ là nguyên nhân dẫn đến sự thất vọng, xung đột và năng lượng cảm xúc.',
      },
    ],
  },
  {
    number: 3,
    descriptions: [
      {
        id: 1,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'ĐỈNH SỐ 3 luôn là thời kỳ mà sự chú trọng cần được hướng tới những mục tiêu theo đuổi trí tuệ. Đó là một giai đoạn quan trọng của việc học hỏi, xem xét và phân tích.',
      },
      {
        id: 2,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'Nhiều người nhận thấy sự thôi thúc đi du lịch đặc biệt nổi lên dưới sự hướng dẫn của rung động này. Ở giai đoạn này trong cuộc đời của họ, du lịch đối với những người như vậy đóng một vai trò rất quan trọng như một phương tiện học tập và mở rộng tầm nhìn của họ về cuộc sống.',
      },
      {
        id: 3,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'Nếu họ không cho phép khả năng tinh thần của mình mở rộng một cách tích cực, họ có nguy cơ trở thành người chỉ trích, chính xác và không có gì đáng ngạc nhiên, khá không được ưa chuộng.',
      },
    ],
  },
  {
    number: 4,
    descriptions: [
      {
        id: 1,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'ĐỈNH SỐ 4 mang lại sức mạnh vật chất gia tăng. Điều này có thể được thể hiện theo bất kỳ cách nào, tùy thuộc vào mức độ trưởng thành chung, các đặc điểm của Số chủ đạo và Biểu đồ ngày sinh.',
      },
      {
        id: 2,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'Đối với những người đã chuẩn bị cho công việc khó khăn, có thể đạt được nhiều điều dưới sự rung động này. Đối với những người cần có thêm kiến ​​thức trong việc đối phó với các khía cạnh ý thức để hoàn thiện sự trưởng thành của họ và những người đã sẵn sàng để tham gia vào công việc thể chất, sự phát triển quan trọng sẽ khen thưởng những nỗ lực của họ.',
      },
      {
        id: 3,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'Nhưng những người trở nên quá tham vọng, hám lợi hoặc ham muốn sẽ thấy giai đoạn này là mất mát hơn là được lợi. Mặc dù họ có thể làm việc chăm chỉ hơn, họ sẽ không đạt được tiến bộ rõ rệt trong khi động cơ của họ rất ích kỷ. Điều này có thể dẫn đến căng thẳng nghiêm trọng cho thần kinh và tình trạng sức khỏe chung của họ, điều này chỉ có thể được khắc phục sau khi họ đánh giá lại động cơ của mình.',
      },
    ],
  },
  {
    number: 5,
    descriptions: [
      {
        id: 1,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'ĐỈNH SỐ 5 thường giới thiệu những thay đổi đáng kể đối với trạng thái cảm xúc của con người. Những điều này được tạo ra thông qua sự xuất hiện của sự phát triển và hiểu biết về tâm linh, dẫn đến tự do cá nhân lớn hơn.',
      },
      {
        id: 2,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'Đó là giai đoạn mà các năng lực tinh thần/tâm linh được tăng cường đáng kể, do đó tạo điều kiện cho mức độ kiểm soát cảm xúc được cải thiện. Đổi lại, điều này làm giảm bớt hành vi phản ứng với mọi người và tình huống. Kết quả là, một thước đo lớn hơn về tự do cá nhân phát triển để chuẩn bị cho việc nâng cao nhận thức về tâm linh.',
      },
      {
        id: 3,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'Những người trong những năm trước lo lắng về an ninh tài chính của họ giờ đây đã có phương tiện để xua tan nỗi lo đó bằng một cái nhìn cân bằng hơn về nhu cầu thực tế của họ và những ảnh hưởng đến môi trường.',
      },
    ],
  },
  {
    number: 6,
    descriptions: [
      {
        id: 1,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'ĐỈNH SỐ 6 mang trong mình một sức mạnh vô cùng mạnh mẽ để phát triển sáng tạo. Đó là thời kỳ mà các năng lực tinh thần và tinh thần cao nhất có thể kết hợp để tiết lộ cho chúng ta vai trò quan trọng của chúng ta trong kế hoạch sáng tạo vô hạn.',
      },
      {
        id: 2,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'Nhận thức siêu phàm như vậy sẽ hiếm khi trở nên rõ ràng đối với bất kỳ ai, trừ những người trưởng thành hơn, tiến hóa cao hơn. Đối với đa số, những người xác định sở hữu vật chất, đây trở thành một giai đoạn gắn bó với gia đình hoặc nếu chưa lập gia đình, khao khát được ổn định trong ngôi nhà của chính họ. Xu hướng lo lắng về tổ ấm hoặc vội vàng kết hôn nên được nhìn nhận đơn thuần chỉ là những yếu tố phản ánh khả năng sinh sản của những gì nếu không sẽ là một động lực sáng tạo mạnh mẽ.',
      },
      {
        id: 3,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'Cần rèn luyện sự khôn ngoan và kiên nhẫn để tránh phải nhận những bài học tổn thương khi cảm xúc chi phối công việc của con người.',
      },
    ],
  },
  {
    number: 7,
    descriptions: [
      {
        id: 1,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'ĐỈNH SỐ 7 có thể mang lại nhiều thay đổi đáng ngạc nhiên trong cuộc sống của mọi người. Đó là giai đoạn chúng ta được kêu gọi chia sẻ tất cả những gì chúng ta đã học được cho đến nay. Bằng cách đó, chúng ta trải nghiệm sự tiến bộ vượt bậc trong quá trình phát triển của chính chúng ta, vì không có hệ thống học tập nào tốt hơn hệ thống dạy học.',
      },
      {
        id: 2,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'Đây là một giai đoạn thực nghiệm khốc liệt trong cuộc đời, vì nó đòi hỏi chúng ta phải trải qua nhiều thử nghiệm. Nếu thành công, chúng ta hội đủ điều kiện nhận những giáo lý cao hơn đang chờ đợi chúng ta trong năm nay; nếu chúng ta chưa trưởng thành đến mức tăng trưởng có thể chấp nhận được, chúng ta phải dành nhiều thời gian hơn cho quá trình phát triển chuẩn bị.',
      },
      {
        id: 3,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'Hầu hết mọi người trong giai đoạn ảnh hưởng dao động này được kêu gọi để thực hiện một số hình thức giảng dạy, nhưng không nhất thiết phải trong các lĩnh vực học thuật thông thường. Thông thường, việc giảng dạy của họ gắn liền với các lĩnh vực phát triển con người sau học thuật như yoga, các liệu pháp tự nhiên, nhận thức tâm linh và phát triển nghệ thuật.',
      },
    ],
  },
  {
    number: 8,
    descriptions: [
      {
        id: 1,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'ĐỈNH SỐ 8 biểu thị nền độc lập là lực lượng thịnh hành trong thời kỳ rất hùng mạnh này.',
      },
      {
        id: 2,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'Tất nhiên, sự độc lập có phát triển thông qua các hoạt động nghệ thuật hay thương mại hay không sẽ phụ thuộc vào Số chủ đạo: nếu nó là một số chẵn, thành công về mặt tài chính nếu được chỉ ra; nếu là một số lẻ, khả năng thành công thông qua biểu hiện nghệ thuật (hoặc đối với một số người là học thuật) sẽ cao hơn.',
      },
      {
        id: 3,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'Cần phải hết sức thận trọng để sử dụng sức mạnh của rung động này theo hướng đóng góp/xây dựng, và không để các cá nhân chống đối hoặc các tình huống hạn chế ức chế sự truyền của nó. Kết quả của những ảnh hưởng như vậy sẽ có thể nhận thấy rõ ràng trong một sự xa cách bất thường - nỗ lực của tâm hồn đang đấu tranh để đạt được sự biểu hiện độc lập.',
      },
    ],
  },
  {
    number: 9,
    descriptions: [
      {
        id: 1,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'ĐỈNH SỐ 9 giới thiệu một thời kỳ hoạt động nhân đạo rõ rệt. Sự rung động này mang đến cho nó những cơ hội đặc biệt để phục vụ loài người.',
      },
      {
        id: 2,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'Đây cũng là giai đoạn mà sự tham gia mạnh mẽ về mặt tinh thần là cần thiết để đạt được thành công lớn nhất: phân tích và đánh giá nhu cầu của người khác, lập kế hoạch cho những thay đổi lớn trong ơn gọi và đánh giá lại các mối quan hệ lâu đời và môi trường xung quanh. Nhiều người cố gắng đưa ra yêu cầu về thời gian và năng lượng của bạn trong giai đoạn này. Một số có nhu cầu thực sự và cung cấp các cơ hội quan trọng để phục vụ; một số sẽ giả tạo để thu hút thiện cảm của bạn. Những tình huống về sau nên được coi như những cá nhân cần thức tỉnh. Khả năng phân biệt và phân tích của chúng ta chắc chắn sẽ được kiểm tra và củng cố bởi những trải nghiệm như vậy.',
      },
      {
        id: 3,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'Trong khi một số người chịu sự rung động này sẽ cần ở nhà và được phục vụ, những người khác sẽ được chuyển đi du lịch để trải qua những bài học quan trọng trong quá trình phát triển. Tất cả mọi người, trong năm đầu tiên chịu ảnh hưởng sau khi đạt được Đỉnh này, sẽ nhận thấy những thay đổi quan trọng xảy ra trong cuộc sống của họ. Nếu không liên quan đến du lịch, họ sẽ hầu như không có ngoại lệ (không thể né) chuyển nhà, thay đổi công việc hoặc hình thành vòng kết nối mới của những người quen. Bất kỳ một trong số những thay đổi này trong lối sống đều có thể xảy ra, tùy thuộc vào bản chất của các trách nhiệm cần thiết đối với giai đoạn hiện tại trong quá trình phát triển đến khi trưởng thành.',
      },
    ],
  },
  {
    number: 10,
    descriptions: [
      {
        id: 1,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'ĐỈNH SỐ 10 chỉ có thể xảy ra trên Đỉnh Kim tự tháp thứ ba hoặc thứ tư, khi sự trưởng thành tiến gần đến đỉnh cao của nó. Nó mang lại một sức mạnh đặc biệt, một sức mạnh duy nhất liên quan đến nhu cầu của người khác trong những giai đoạn điều chỉnh quan trọng trong cuộc sống của họ.',
      },
      {
        id: 2,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'Khả năng này là kết quả đáng mừng của kinh nghiệm sống của chính con người và quá trình đào tạo do họ truyền đạt. Với sự nhấn mạnh vào sức mạnh tâm trí, như được chỉ ra bởi số 9 trong mỗi ngày sinh của thế kỷ trước, cần có một lượng điều chỉnh tinh thần đáng kể để tái hiện lại cách nhìn và lối sống khi Thời đại mới đến gần. Những linh hồn lớn tuổi có Số Đỉnh 10 trong giai đoạn này đảm nhận những vai trò cực kỳ quan trọng trong việc hướng dẫn và khuyến khích những người gặp khó khăn.',
      },
      {
        id: 3,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'Đây là một trách nhiệm thú vị mang lại cho người cho nhiều lợi ích cũng như người nhận.',
      },
    ],
  },
  {
    number: 11,
    descriptions: [
      {
        id: 1,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'SỐ ĐỈNH 11 là số thứ hai trong hai số Đỉnh có thể xuất hiện trên đỉnh thứ ba hoặc thứ tư. Như với Đỉnh số 10, cần phải có một mức độ trưởng thành cao để xử lý sức mạnh của nó. Đỉnh Số 11 chỉ ra rằng cần phải có một số lượng đáng kể trách nhiệm về mặt thiêng liêng. Tuy nhiên, nhu cầu sẽ không bao giờ vượt quá khả năng của cá nhân.',
      },
      {
        id: 2,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'Đó là giai đoạn có tính trực quan cao, khi các hành động được truyền cảm hứng nhiều nhất trở nên khả thi. Tuy nhiên, có những yêu cầu tinh thần nhất định cần thiết để tiềm năng tối ưu của giai đoạn này được thực hiện. Những điều này liên quan đến lòng từ bi, tiết độ, chính trực và thực hành thiền định. Từ bi có ý nghĩa hơn nhiều so với cách giải thích hạn chế hiện đại của nó về sự hài lòng và thoải mái. Đó là việc thực hành từ thiện, chia sẻ tình yêu thương theo nghĩa thiêng liêng cao cả nhất. Trong những thuật ngữ rất thực tế, nó bao hàm sự chu đáo và hài hòa với mọi sự sống, đặc biệt là cuộc sống của con người. Khí chất là biểu hiện của sự cân bằng và điều độ trong mọi công việc, trong khi thiền định là một bài tập giúp khai sáng thông qua một tâm trí và cơ thể thoải mái, khôi phục lại sự hài hòa hoàn toàn.',
      },
      {
        id: 3,
        type: DescriptionTypeEnum.UNCLASSIFIED,
        content:
          'Đức tính chính trực hoàn hảo phải nổi trội trong mọi hành động và suy nghĩ, do đó đảm bảo rằng không có thế lực tiêu cực nào có thể cản trở sự phát triển tinh thần, mục đích tối cao của thời kỳ này.',
      },
    ],
  },
];
