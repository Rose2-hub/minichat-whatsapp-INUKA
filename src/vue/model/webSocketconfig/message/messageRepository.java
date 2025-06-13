@Repository
public interface MessageRepository extends MongoRepository<Message, String> {
    List<Message> findBySenderIdAndReceiverId(String senderId, String receiverId);
}

