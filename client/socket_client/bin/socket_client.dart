import 'package:socket_io_client/socket_io_client.dart' as IO;

main() {
  // Dart client
  IO.Socket socket = IO.io('ws://localhost:3000',
      IO.OptionBuilder().setTransports(['websocket']).build());
  socket.onConnect((_) {
    print('connect');
    socket.emit('test', 'test');
  });
  socket.on('event', (data) => print(data));
  socket.onDisconnect((_) => print('disconnect'));
  socket.on('fromServer', (_) => print(_));
}
