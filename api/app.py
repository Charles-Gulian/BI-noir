from flask import Flask, request, jsonify

app = Flask(__name__)


class Game:
    def __init__(self):
        self.game_state = {}

    def ask_question(self, character_id, question):
        # Simulate asking a question to a character and getting a response
        response = f"{character_id} responds to '{question}'"
        return response


# Create an instance of the Game class
game_instance = Game()


@app.route('/test')
def test_endpoint() -> str:
    print('testing in progress')
    return 'Hello, World'


@app.route('/ask_question', methods=['POST'])
def ask_question():
    try:
        data = request.get_json()
        character_id = data.get('character_id')
        question = data.get('question')

        if character_id is None or question is None:
            return jsonify({'error': 'Invalid request'}), 400

        response = game_instance.ask_question(character_id, question)

        return jsonify({'response': response})

    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
